import { useCart } from "../../context/CartContext";  // ADD THIS

function ProductCard({ id, title, price, image }) {  // Make sure id is included
  const { addToCart } = useCart();  // Get addToCart function from context

  const handleAddToCart = () => {
    const product = { id, title, price, image };
    addToCart(product, 1);
    alert(`${title} added to cart!`);  // Optional feedback
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black p-5 rounded-2xl border border-gray-800 hover:border-gray-600 hover:shadow-2xl hover:scale-[1.03] transition duration-300">
      
      {/* Image */}
      <div className="bg-gray-800 p-4 rounded-xl">
        <img
          src={image}
          alt={title}
          className="h-44 mx-auto object-contain rounded"
        />
      </div>

      {/* Content */}
      <div className="mt-4 space-y-2">
        <h2 className="text-sm text-gray-300">{title}</h2>
        <p className="text-yellow-400 text-xs tracking-widest">★★★★★</p>
        <p className="font-bold text-lg">₹ {price}</p>

        {/* UPDATE: Add onClick handler */}
        <button 
          onClick={handleAddToCart}  // ADD THIS
          className="w-full mt-3 bg-white text-black py-2 rounded-lg hover:bg-gray-200 text-sm font-medium transition"
        >
          Add to Cart
        </button>
      </div>

    </div>
  );
}

export default ProductCard;