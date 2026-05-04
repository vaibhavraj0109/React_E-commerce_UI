import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center py-12 sm:py-20">
        <div className="text-center max-w-md mx-auto px-4 sm:px-6">
          <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">🛒</div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Your Cart is Empty</h2>
          <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8">
            Looks like you haven't added any sketches to your cart yet.
          </p>
          <Link to="/shop">
            <button className="w-full sm:w-auto bg-white text-black px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
              Browse Sketches
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with back button */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold">Your Cart</h1>
          <Link to="/shop" className="text-gray-400 hover:text-white transition flex items-center gap-2 text-sm sm:text-base">
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            {cartItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-gray-950 border border-gray-800 rounded-xl p-3 sm:p-4 flex gap-3 sm:gap-4"
              >
                {/* Product Image */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gray-800 rounded-lg flex-shrink-0 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Product Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm sm:text-base truncate">{item.title}</h3>
                      <p className="text-gray-400 text-xs">Pencil Sketch</p>
                    </div>
                    <p className="font-bold text-sm sm:text-base">₹ {item.price}</p>
                  </div>
                  
                  {/* Quantity Controls */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mt-3 sm:mt-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="bg-gray-800 hover:bg-gray-700 text-white w-8 h-8 sm:w-9 sm:h-9 rounded-lg transition active:scale-95"
                      >
                        <Minus className="w-3 h-3 sm:w-4 sm:h-4 mx-auto" />
                      </button>
                      <span className="text-white font-medium min-w-[30px] text-center text-sm sm:text-base">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="bg-gray-800 hover:bg-gray-700 text-white w-8 h-8 sm:w-9 sm:h-9 rounded-lg transition active:scale-95"
                      >
                        <Plus className="w-3 h-3 sm:w-4 sm:h-4 mx-auto" />
                      </button>
                    </div>
                    
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-400 hover:text-red-300 text-xs sm:text-sm transition flex items-center gap-1"
                    >
                      <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Order Summary - Sticky on desktop */}
          <div className="lg:col-span-1">
            <div className="bg-gray-950 border border-gray-800 rounded-xl p-4 sm:p-6 sticky top-4">
              <h2 className="text-lg sm:text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-2 sm:space-y-3 text-gray-300 border-b border-gray-800 pb-3 sm:pb-4 text-sm sm:text-base">
                <div className="flex justify-between">
                  <span>Subtotal ({cartItems.reduce((sum, i) => sum + i.quantity, 0)} items)</span>
                  <span>₹ {totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-400">Free</span>
                </div>
              </div>
              
              <div className="flex justify-between mt-3 sm:mt-4 text-base sm:text-xl font-bold">
                <span>Total</span>
                <span>₹ {totalPrice}</span>
              </div>
              
              <button 
                onClick={() => alert("Checkout functionality coming soon!")}
                className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition mt-4 sm:mt-6 text-sm sm:text-base active:scale-95"
              >
                Proceed to Checkout
              </button>
              
              <button 
                onClick={clearCart}
                className="w-full text-gray-400 hover:text-white text-xs sm:text-sm mt-3 transition"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;