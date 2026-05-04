import { useCart } from "../../context/CartContext";

function ProductCard({ id, title, price, image }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const product = { id, title, price, image };
    addToCart(product, 1);
    // Optional: Add haptic feedback on mobile
    if (window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(50);
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl border border-gray-800 hover:border-gray-600 hover:shadow-2xl hover:scale-[1.02] sm:hover:scale-[1.03] transition duration-300">
      
      {/* Image Container - Responsive sizing */}
      <div className="bg-gray-800 p-3 sm:p-4 rounded-lg sm:rounded-xl aspect-square flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain max-h-32 sm:max-h-36 md:max-h-44"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="mt-3 sm:mt-4 space-y-1 sm:space-y-2">
        <h2 className="text-xs sm:text-sm text-gray-300 line-clamp-2 min-h-[2.5rem]">
          {title}
        </h2>

        {/* Rating - Hidden on very small screens */}
        <p className="text-yellow-400 text-xs tracking-widest hidden xs:block">★★★★★</p>

        {/* Price - Responsive font */}
        <p className="font-bold text-base sm:text-lg md:text-xl">₹ {price}</p>

        {/* Button - Larger touch target on mobile */}
        <button 
          onClick={handleAddToCart}
          className="w-full mt-2 sm:mt-3 bg-white text-black py-2.5 sm:py-2 rounded-lg hover:bg-gray-200 text-sm font-medium transition active:scale-95 sm:active:scale-100"
        >
          Add to Cart
        </button>
      </div>

    </div>
  );
}

export default ProductCard;