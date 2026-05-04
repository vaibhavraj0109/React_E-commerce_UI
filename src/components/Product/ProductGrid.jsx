import ProductCard from "./ProductCard";

function ProductGrid({ products }) {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12 sm:py-20">
        <p className="text-gray-400 text-base sm:text-lg">No products found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
      {products.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default ProductGrid;