import ProductGrid from "../components/Product/ProductGrid";

function Home() {
  const products = [
    { id: 1, title: "Sketch Portrait", price: 499, image: "https://picsum.photos/200?1" },
    { id: 2, title: "Realistic Art", price: 799, image: "https://picsum.photos/200?2" },
  ];
 
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

  {/* HERO */}
  
  <div className="mb-16">
    <h1 className="text-5xl font-bold leading-tight mb-4">
      Elevate Your Space with <span className="text-gray-400">Handmade Sketches</span>
    </h1>

    <p className="text-gray-400 max-w-xl">
      Discover premium pencil art crafted with precision and emotion. 
      Perfect for portraits, gifts, and timeless memories.
    </p>

    <button className="mt-6 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
      Explore Collection
    </button>
  </div>

  {/* SECTION */}
  <h2 className="text-2xl font-semibold mb-8 tracking-wide">
    Featured Products
  </h2>

      <ProductGrid products={products} />
    </div>
  );
}

export default Home;