// src/context/CartContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

// Create the Context
const CartContext = createContext();

// Custom hook to use cart anywhere (cleaner than useContext directly)
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};

// Provider component that wraps your app
export const CartProvider = ({ children }) => {
  // State: cart items array
  const [cartItems, setCartItems] = useState([]);
  
  // State: total items count (for Navbar badge)
  const [totalItems, setTotalItems] = useState(0);
  
  // State: total price
  const [totalPrice, setTotalPrice] = useState(0);

  // Load cart from localStorage when app starts
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    
    // Update totals whenever cart changes
    const items = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const price = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setTotalItems(items);
    setTotalPrice(price);
  }, [cartItems]);

  // Add item to cart
  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      // Check if product already in cart
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // Update quantity if exists
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Add new item if not exists
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // Update quantity of an item
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Value object that will be available to all children
  const value = {
    cartItems,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};