function ProductDetails() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 text-white">
      <h1 className="text-3xl font-bold mb-6">Product Details</h1>

      <div className="flex flex-col md:flex-row gap-10">
        
        <img
          src="https://picsum.photos/300"
          className="w-full md:w-1/2 rounded"
        />

        <div>
          <h2 className="text-2xl font-semibold mb-2">Sketch Portrait</h2>
          <p className="text-gray-400 mb-4">
            High quality pencil sketch artwork.
          </p>

          <p className="text-xl font-bold mb-4">₹ 499</p>

          <button className="bg-white text-black px-6 py-2 rounded">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
}

export default ProductDetails;