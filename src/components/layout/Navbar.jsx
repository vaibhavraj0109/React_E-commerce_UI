import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-widest text-gray-200">
          Graphite Gallery
        </h1>

        {/* Search */}
        <input
          type="text"
          placeholder="Search sketches..."
          className="hidden md:block px-3 py-1 rounded bg-gray-900 border border-gray-700 text-sm focus:outline-none"
        />

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/shop" className="hover:text-gray-400">Shop</Link>
          <Link to="/cart" className="hover:text-gray-400">Cart</Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;