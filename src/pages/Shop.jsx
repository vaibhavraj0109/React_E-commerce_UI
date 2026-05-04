import ProductGrid from "../components/Product/ProductGrid";
import FiltersSidebar from "../components/shop/FiltersSidebar";
import SortBar from "../components/shop/SortBar";

function Shop() {
  const products = [
    { id: 1, title: "Sketch Portrait", price: 499, image: "https://picsum.photos/200?1" },
    { id: 2, title: "Realistic Art", price: 799, image: "https://picsum.photos/200?2" },
    { id: 3, title: "Custom Sketch", price: 999, image: "https://picsum.photos/200?3" },
    { id: 4, title: "Premium Artwork", price: 1299, image: "https://picsum.photos/200?4" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 flex gap-8">
      <FiltersSidebar />

      <div className="flex-1">
       <SortBar title="Our Collection" onSort={(value) => console.log("Sort by:", value)} />
        <ProductGrid products={products} />
      </div>
    </div>
  );
}

export default Shop;