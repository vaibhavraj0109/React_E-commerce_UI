import { X } from "lucide-react";

function FiltersSidebar({ 
  categories, 
  selectedCategories, 
  onCategoryChange,
  priceRange,
  onPriceChange,
  onReset,
  searchQuery,
  onSearchChange,
  isMobile = false,
  onClose
}) {
  return (
    <div className="bg-gray-900 p-4 sm:p-5 rounded-xl w-full">
      
      {/* Mobile Header */}
      {isMobile && (
        <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-800">
          <h3 className="text-lg font-semibold">Filters</h3>
          <button onClick={onClose} className="p-1 hover:bg-gray-800 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Desktop Header */}
      {!isMobile && (
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Filters</h3>
          <button 
            onClick={onReset}
            className="text-xs sm:text-sm text-gray-400 hover:text-white transition"
          >
            Reset All
          </button>
        </div>
      )}

      {/* Search Filter */}
      <div className="mb-5 sm:mb-6">
        <p className="text-sm font-medium mb-2 text-gray-400">Search</p>
        <input
          type="text"
          placeholder="Search sketches..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-3 py-2 rounded-lg bg-black border border-gray-700 text-sm focus:outline-none focus:border-gray-500"
        />
      </div>

      {/* Category Filter */}
      <div className="mb-5 sm:mb-6">
        <p className="text-sm font-medium mb-2 text-gray-400">Category</p>
        <div className="space-y-2 text-sm max-h-48 overflow-y-auto">
          {categories.map((category) => (
            <label key={category} className="flex items-center gap-2 cursor-pointer hover:text-gray-300 py-1">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => onCategoryChange(category)}
                className="cursor-pointer w-4 h-4"
              />
              <span className="text-sm">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="mb-5 sm:mb-6">
        <p className="text-sm font-medium mb-2 text-gray-400">Price Range</p>
        <div className="space-y-3">
          <input
            type="range"
            min="0"
            max="2000"
            value={priceRange.max}
            onChange={(e) => onPriceChange(priceRange.min, parseInt(e.target.value))}
            className="w-full cursor-pointer"
          />
          <div className="flex justify-between text-xs sm:text-sm">
            <span>₹{priceRange.min}</span>
            <span>₹{priceRange.max}+</span>
          </div>
        </div>
      </div>

      {/* Active Filters Summary */}
      {(selectedCategories.length > 0 || searchQuery || priceRange.max < 2000) && !isMobile && (
        <div className="mt-4 pt-4 border-t border-gray-800">
          <p className="text-xs text-gray-500 mb-2">Active Filters:</p>
          <div className="flex flex-wrap gap-2">
            {searchQuery && (
              <span className="text-xs bg-gray-800 px-2 py-1 rounded">Search: {searchQuery}</span>
            )}
            {selectedCategories.slice(0, 3).map(cat => (
              <span key={cat} className="text-xs bg-gray-800 px-2 py-1 rounded">{cat}</span>
            ))}
            {selectedCategories.length > 3 && (
              <span className="text-xs bg-gray-800 px-2 py-1 rounded">+{selectedCategories.length - 3}</span>
            )}
            {priceRange.max < 2000 && (
              <span className="text-xs bg-gray-800 px-2 py-1 rounded">Up to ₹{priceRange.max}</span>
            )}
          </div>
        </div>
      )}

      {/* Reset button on mobile */}
      {isMobile && (selectedCategories.length > 0 || searchQuery || priceRange.max < 2000) && (
        <button 
          onClick={onReset}
          className="w-full mt-4 bg-gray-800 text-white py-2 rounded-lg text-sm hover:bg-gray-700 transition"
        >
          Reset All Filters
        </button>
      )}

    </div>
  );
}

export default FiltersSidebar;