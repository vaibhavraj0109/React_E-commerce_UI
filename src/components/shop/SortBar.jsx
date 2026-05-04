function SortBar({ title = "All Products", sortBy = "default", onSortChange }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-wide">{title}</h2>

      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-400 hidden sm:inline">Sort by:</span>
        <select 
          value={sortBy}
          onChange={(e) => onSortChange && onSortChange(e.target.value)}
          className="bg-gray-900 border border-gray-700 text-sm px-3 py-2 rounded focus:outline-none focus:border-gray-500 cursor-pointer"
        >
          <option value="default">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>
      </div>
    </div>
  );
}

export default SortBar;