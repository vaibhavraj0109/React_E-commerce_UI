import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useState } from "react";
import { Menu, X, ShoppingBag, Search, User, Home, Info, LogIn } from "lucide-react";

function Navbar() {
  const { totalItems } = useCart();
  const [searchInput, setSearchInput] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchInput)}`);
      setSearchInput("");
      setIsSearchOpen(false);
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { to: "/", label: "Home", icon: Home },
    { to: "/shop", label: "Shop", icon: null },
    { to: "/about", label: "About", icon: Info },
    { to: "/account", label: "Account", icon: User },
    { to: "/cart", label: "Cart", icon: ShoppingBag, badge: totalItems },
  ];

  return (
    <nav className="bg-black text-white border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo - Mobile */}
          <Link 
            to="/" 
            className="text-lg sm:text-xl md:text-2xl font-bold tracking-widest text-gray-200 hover:text-gray-300 transition flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Graphite<span className="hidden xs:inline"> Gallery</span>
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {/* Search Bar - Desktop */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search sketches..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-64 lg:w-80 px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-sm focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2">
                <Search className="w-4 h-4 text-gray-400" />
              </button>
            </form>

            {/* Navigation Links - Desktop */}
            <div className="flex gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="relative hover:text-gray-400 transition group"
                >
                  {link.label}
                  {link.badge > 0 && (
                    <span className="absolute -top-2 -right-4 bg-white text-black text-xs rounded-full px-1.5 py-0.5 font-bold min-w-[20px] text-center">
                      {link.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Search Toggle Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-gray-900 rounded-lg transition"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Cart Link with Badge - Mobile */}
            <Link to="/cart" className="relative p-2 hover:bg-gray-900 rounded-lg transition">
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-black text-xs rounded-full px-1.5 py-0.5 font-bold min-w-[18px] text-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-gray-900 rounded-lg transition"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden pb-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search sketches..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-base focus:outline-none focus:border-gray-500"
                autoFocus
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2">
                <Search className="w-5 h-5 text-gray-400" />
              </button>
            </form>
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800 animate-slideDown">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center justify-between px-4 py-3 hover:bg-gray-900 rounded-lg transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="flex items-center gap-3">
                    {link.icon && <link.icon className="w-5 h-5" />}
                    <span>{link.label}</span>
                  </span>
                  {link.badge > 0 && (
                    <span className="bg-white text-black text-xs rounded-full px-2 py-1 font-bold">
                      {link.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;