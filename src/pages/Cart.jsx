// src/pages/Cart.jsx
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center py-20">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="text-6xl mb-6">🛒</div>
          <h2 className="text-2xl font-bold mb-3">Your Cart is Empty</h2>
          <p className="text-gray-400 mb-8">
            Looks like you haven't added any sketches to your cart yet.
          </p>
          <Link to="/shop">
            <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
              Browse Sketches
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items - Left column (2/3 width) */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-gray-950 border border-gray-800 rounded-xl p-4 flex gap-4"
              >
                {/* Product Image */}
                <div className="w-24 h-24 bg-gray-800 rounded-lg flex-shrink-0 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Product Details */}
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-gray-400 text-sm">Pencil Sketch</p>
                    </div>
                    <p className="font-bold text-lg">₹ {item.price}</p>
                  </div>
                  
                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="bg-gray-800 hover:bg-gray-700 text-white w-8 h-8 rounded-lg transition"
                      >
                        -
                      </button>
                      <span className="text-white font-medium min-w-[30px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="bg-gray-800 hover:bg-gray-700 text-white w-8 h-8 rounded-lg transition"
                      >
                        +
                      </button>
                    </div>
                    
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-400 hover:text-red-300 text-sm transition"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Order Summary - Right column (1/3 width) */}
          <div className="lg:col-span-1">
            <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 sticky top-4">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-3 text-gray-300 border-b border-gray-800 pb-4">
                <div className="flex justify-between">
                  <span>Subtotal ({cartItems.reduce((sum, i) => sum + i.quantity, 0)} items)</span>
                  <span>₹ {totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
              </div>
              
              <div className="flex justify-between mt-4 text-xl font-bold">
                <span>Total</span>
                <span>₹ {totalPrice}</span>
              </div>
              
              <button 
                onClick={() => alert("Checkout functionality coming soon!")}
                className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition mt-6"
              >
                Proceed to Checkout
              </button>
              
              <button 
                onClick={clearCart}
                className="w-full text-gray-400 hover:text-white text-sm mt-4 transition"
              >
                Clear Cart
              </button>
              
              <Link to="/shop">
                <button className="w-full text-gray-400 hover:text-white text-sm mt-2 transition">
                  ← Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;