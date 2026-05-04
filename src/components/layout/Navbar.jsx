import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";  // ADD THIS

function Navbar() {
  const { totalItems } = useCart();  // Get total items count

  return (
    <nav className="bg-black text-white px-6 py-4 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-widest text-gray-200 hover:text-gray-300 transition">
          Graphite Gallery
        </Link>

        {/* Search */}
        <input
          type="text"
          placeholder="Search sketches..."
          className="hidden md:block px-3 py-1 rounded bg-gray-900 border border-gray-700 text-sm focus:outline-none focus:border-gray-500"
        />

        {/* Navigation Links */}
        <div className="flex gap-6 text-sm items-center">
          <Link to="/" className="hover:text-gray-400 transition">Home</Link>
          <Link to="/shop" className="hover:text-gray-400 transition">Shop</Link>
          <Link to="/about" className="hover:text-gray-400 transition">About</Link>
          <Link to="/account" className="hover:text-gray-400 transition">Account</Link>
          
          {/* Cart Link with Badge */}
          <Link to="/cart" className="hover:text-gray-400 transition relative">
            Cart
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-4 bg-white text-black text-xs rounded-full px-1.5 py-0.5 font-bold">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;