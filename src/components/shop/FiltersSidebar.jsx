function FiltersSidebar() {
  return (
    <div className="bg-gray-900 p-5 rounded-xl w-64 hidden md:block">
      
      <h3 className="text-lg font-semibold mb-4">Filters</h3>

      {/* Category */}
      <div className="mb-6">
        <p className="text-sm font-medium mb-2 text-gray-400">Category</p>
        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Portrait
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Realistic
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Custom
          </label>
        </div>
      </div>

      {/* Price */}
      <div>
        <p className="text-sm font-medium mb-2 text-gray-400">Price</p>
        <input
          type="range"
          className="w-full"
        />
      </div>

    </div>
  );
}

export default FiltersSidebar;