function SortBar() {
  return (
    <div className="flex justify-between items-center mb-6">
     <h2 className="text-3xl font-bold tracking-wide">Featured Products</h2>

      <select className="bg-gray-900 border border-gray-700 text-sm px-3 py-1 rounded">
        <option>Sort by</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
      </select>
    </div>
  );
}

export default SortBar;