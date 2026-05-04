import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo - Make it clickable to home */}
        <Link to="/" className="text-xl font-bold tracking-widest text-gray-200 hover:text-gray-300 transition">
          Graphite Gallery
        </Link>

        {/* Search - keep as is */}
        <input
          type="text"
          placeholder="Search sketches..."
          className="hidden md:block px-3 py-1 rounded bg-gray-900 border border-gray-700 text-sm focus:outline-none focus:border-gray-500"
        />

        {/* Navigation Links - ADD About and Account */}
        <div className="flex gap-6 text-sm">
          <Link to="/" className="hover:text-gray-400 transition">Home</Link>
          <Link to="/shop" className="hover:text-gray-400 transition">Shop</Link>
          <Link to="/about" className="hover:text-gray-400 transition">About</Link>     {/* NEW */}
          <Link to="/account" className="hover:text-gray-400 transition">Account</Link> {/* NEW */}
          <Link to="/cart" className="hover:text-gray-400 transition">Cart</Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;