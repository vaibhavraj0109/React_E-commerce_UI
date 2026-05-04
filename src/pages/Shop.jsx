import { useState } from "react";
import ProductGrid from "../components/Product/ProductGrid";
import FiltersSidebar from "../components/shop/FiltersSidebar";
import SortBar from "../components/shop/SortBar";
import { Filter } from "lucide-react";

// Expanded product data with categories for filtering
const allProducts = [
  { id: 1, title: "Sketch Portrait", price: 499, image: "https://picsum.photos/300?1", category: "Portrait" },
  { id: 2, title: "Realistic Art", price: 799, image: "https://picsum.photos/300?2", category: "Realistic" },
  { id: 3, title: "Custom Sketch", price: 999, image: "https://picsum.photos/300?3", category: "Custom" },
  { id: 4, title: "Premium Artwork", price: 1299, image: "https://picsum.photos/300?4", category: "Realistic" },
  { id: 5, title: "Nature's Beauty", price: 599, image: "https://picsum.photos/300?5", category: "Landscape" },
  { id: 6, title: "Vintage Portrait", price: 449, image: "https://picsum.photos/300?6", category: "Portrait" },
  { id: 7, title: "Animal Kingdom", price: 899, image: "https://picsum.photos/300?7", category: "Animal" },
  { id: 8, title: "Abstract Lines", price: 349, image: "https://picsum.photos/300?8", category: "Abstract" },
];

// Available categories for filtering
const categories = ["Portrait", "Realistic",  "Landscape", "Animal", "Abstract"];

function Shop() {
  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000 });
  const [sortBy, setSortBy] = useState("default");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Toggle category selection
  const toggleCategory = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  // Update price range
  const updatePriceRange = (min, max) => {
    setPriceRange({ min, max });
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setPriceRange({ min: 0, max: 2000 });
    setSortBy("default");
  };

  // Filter and sort products
  let filteredProducts = [...allProducts];

  // 1. Filter by search query
  if (searchQuery) {
    filteredProducts = filteredProducts.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // 2. Filter by categories
  if (selectedCategories.length > 0) {
    filteredProducts = filteredProducts.filter(product =>
      selectedCategories.includes(product.category)
    );
  }

  // 3. Filter by price range
  filteredProducts = filteredProducts.filter(product =>
    product.price >= priceRange.min && product.price <= priceRange.max
  );

  // 4. Sort products
  switch (sortBy) {
    case "price-asc":
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case "name-asc":
      filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "name-desc":
      filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
      break;
    default:
      filteredProducts.sort((a, b) => a.id - b.id);
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        
        {/* Mobile Filter Button */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setShowMobileFilters(true)}
            className="w-full bg-gray-900 border border-gray-700 px-4 py-3 rounded-lg flex items-center justify-center gap-2"
          >
            <Filter className="w-4 h-4" />
            Filter Products
            {(selectedCategories.length > 0 || searchQuery || priceRange.max < 2000) && (
              <span className="bg-white text-black text-xs rounded-full px-2 py-0.5 ml-2">
                {selectedCategories.length + (searchQuery ? 1 : 0) + (priceRange.max < 2000 ? 1 : 0)}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Filters Drawer */}
        {showMobileFilters && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div 
              className="absolute inset-0 bg-black bg-opacity-50" 
              onClick={() => setShowMobileFilters(false)}
            ></div>
            <div className="absolute right-0 top-0 h-full w-80 bg-gray-950 shadow-xl overflow-y-auto">
              <FiltersSidebar
                categories={categories}
                selectedCategories={selectedCategories}
                onCategoryChange={toggleCategory}
                priceRange={priceRange}
                onPriceChange={updatePriceRange}
                onReset={() => {
                  resetFilters();
                  setShowMobileFilters(false);
                }}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                isMobile={true}
                onClose={() => setShowMobileFilters(false)}
              />
            </div>
          </div>
        )}

        {/* Desktop Layout - Filters + Products */}
        <div className="flex gap-6 lg:gap-8">
          
          {/* Filters Sidebar - Desktop only */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <FiltersSidebar
              categories={categories}
              selectedCategories={selectedCategories}
              onCategoryChange={toggleCategory}
              priceRange={priceRange}
              onPriceChange={updatePriceRange}
              onReset={resetFilters}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
          </div>

          {/* Products Area */}
          <div className="flex-1">
            <SortBar 
              title={`${filteredProducts.length} Products`}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />
            
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12 sm:py-20">
                <p className="text-gray-400 text-base sm:text-lg">No products found matching your criteria.</p>
                <button
                  onClick={resetFilters}
                  className="mt-4 bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <ProductGrid products={filteredProducts} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;