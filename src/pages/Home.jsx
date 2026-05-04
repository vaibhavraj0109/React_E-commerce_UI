import { Link } from "react-router-dom";
import ProductGrid from "../components/Product/ProductGrid";

function Home() {
  const products = [
    { id: 1, title: "Elegant Portrait", price: 499, image: "https://picsum.photos/300?1", category: "Portrait" },
    { id: 2, title: "Mountain Landscape", price: 799, image: "https://picsum.photos/300?2", category: "Landscape" },
    { id: 3, title: "Custom Pet Portrait", price: 999, image: "https://picsum.photos/300?3", category: "Custom" },
    { id: 4, title: "Wildlife Study", price: 1299, image: "https://picsum.photos/300?4", category: "Animal" },
  ];

  return (
    <div className="bg-black text-white overflow-x-hidden">
      
      {/* HERO SECTION - Fully Responsive */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-black opacity-80"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* LEFT CONTENT */}
            <div className="text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                Premium <br className="hidden sm:block" />
                <span className="text-gray-400">Handmade Sketches</span>
              </h1>

              <p className="text-gray-400 mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0 text-sm sm:text-base lg:text-lg">
                Turn memories into timeless art. Crafted with precision, passion,
                and attention to every detail.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                <Link to="/shop">
                  <button className="w-full sm:w-auto bg-white text-black px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition text-sm sm:text-base">
                    Shop Now
                  </button>
                </Link>

                <Link to="/shop">
                  <button className="w-full sm:w-auto border border-gray-700 px-6 sm:px-8 py-3 rounded-lg hover:bg-gray-900 transition text-sm sm:text-base">
                    View Gallery
                  </button>
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE - Hidden on mobile */}
            <div className="hidden md:block">
              <div className="bg-gray-900 p-4 sm:p-6 rounded-2xl shadow-2xl">
                <img
                  src="https://picsum.photos/500?random=10"
                  className="rounded-xl w-full h-auto"
                  alt="Hero Art"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURED SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-wide">
            Featured Products
          </h2>

          <Link to="/shop">
            <button className="text-sm text-gray-400 hover:text-white transition flex items-center gap-1">
              View All <span className="text-lg">→</span>
            </button>
          </Link>
        </div>

        <ProductGrid products={products} />
      </section>

      {/* WHY US SECTION - Responsive Grid */}
      <section className="bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 text-center">
            
            <div className="p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎨</div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Handmade Quality</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Every sketch is crafted manually with precision and care.
              </p>
            </div>

            <div className="p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🚀</div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Get your custom artwork delivered quickly and safely.
              </p>
            </div>

            <div className="p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💎</div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Premium Finish</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                High-quality detailing that stands out in every frame.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;