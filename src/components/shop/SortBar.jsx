function SortBar({ title = "All Products", onSort }) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-3xl font-bold tracking-wide">{title}</h2>

      <select 
        className="bg-gray-900 border border-gray-700 text-sm px-3 py-1 rounded focus:outline-none"
        onChange={(e) => onSort && onSort(e.target.value)}
      >
        <option value="default">Sort by</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name-asc">Name: A to Z</option>
        <option value="name-desc">Name: Z to A</option>
      </select>
    </div>
  );
}

export default SortBar;