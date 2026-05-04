import { Link } from "react-router-dom";  // ADD THIS IMPORT
import ProductGrid from "../components/Product/ProductGrid";

function Home() {
  const products = [
    { id: 1, title: "Sketch Portrait", price: 499, image: "https://picsum.photos/300?1" },
    { id: 2, title: "Realistic Art", price: 799, image: "https://picsum.photos/300?2" },
    { id: 3, title: "Custom Sketch", price: 999, image: "https://picsum.photos/300?3" },
    { id: 4, title: "Premium Artwork", price: 1299, image: "https://picsum.photos/300?4" },
  ];

  return (
    <div className="bg-black text-white">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-black opacity-80"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Premium <span className="text-gray-400">Handmade Sketches</span>
            </h1>

            <p className="text-gray-400 mb-8 max-w-lg text-lg">
              Turn memories into timeless art. Crafted with precision, passion,
              and attention to every detail.
            </p>

            <div className="flex gap-4">
              {/* FIXED: Now navigates to shop */}
              <Link to="/shop">
                <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
                  Shop Now
                </button>
              </Link>

              {/* FIXED: Navigates to shop */}
              <Link to="/shop">
                <button className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-900 transition">
                  View Gallery
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden md:block">
            <div className="bg-gray-900 p-6 rounded-2xl shadow-2xl">
              <img
                src="https://picsum.photos/500?random=10"
                className="rounded-xl"
                alt="Hero Art"
              />
            </div>
          </div>

        </div>
      </section>

      {/* FEATURED SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
            Featured Products
          </h2>

          {/* FIXED: View All links to shop */}
          <Link to="/shop">
            <button className="text-sm text-gray-400 hover:text-white transition">
              View All →
            </button>
          </Link>
        </div>

        <ProductGrid products={products} />
      </section>

      {/* WHY US SECTION */}
      <section className="bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10 text-center">

          <div>
            <h3 className="text-lg font-semibold mb-2">🎨 Handmade Quality</h3>
            <p className="text-gray-400 text-sm">
              Every sketch is crafted manually with precision and care.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">🚀 Fast Delivery</h3>
            <p className="text-gray-400 text-sm">
              Get your custom artwork delivered quickly and safely.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">💎 Premium Finish</h3>
            <p className="text-gray-400 text-sm">
              High-quality detailing that stands out in every frame.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;