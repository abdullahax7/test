const products = Array.from({ length: 48 }, (_, i) => ({
  id: i + 1,
  name: [
    "Pro Wireless Headphones", "4K Ultra Monitor", "Mechanical Keyboard RGB",
    "Ergonomic Office Chair", "USB-C Hub 12-in-1", "Webcam 4K HDR",
    "Standing Desk Electric", "NVMe SSD 2TB", "Gaming Mouse 16K DPI",
    "Portable SSD 1TB", "Smart LED Desk Lamp", "Noise Cancelling Earbuds",
  ][i % 12],
  category: ["Audio", "Displays", "Peripherals", "Furniture", "Accessories", "Storage"][i % 6],
  price: [49.99, 299.99, 129.99, 449.99, 79.99, 199.99, 599.99, 159.99, 89.99, 109.99, 59.99, 249.99][i % 12],
  rating: (3.5 + (i % 15) * 0.1).toFixed(1),
  reviews: Math.floor(Math.random() * 5000) + 50,
  stock: ["In Stock", "Low Stock", "In Stock", "In Stock", "Out of Stock"][i % 5],
  badge: [null, "Best Seller", null, "New", null, "Sale", null, null, "Top Rated", null, null, "New"][i % 12],
  discount: [0, 0, 15, 0, 0, 20, 0, 10, 0, 0, 0, 5][i % 12],
}));

const categories = ["All", "Audio", "Displays", "Peripherals", "Furniture", "Accessories", "Storage"];
const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low", "Best Rated", "Most Reviews"];

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Products</h1>
        <p className="text-lg text-gray-500">Top-rated developer gear and tools — {products.length} products available.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar filters */}
        <aside className="w-full lg:w-56 shrink-0 space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Category</h3>
            <ul className="space-y-1">
              {categories.map((c) => (
                <li key={c}>
                  <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-gray-900">
                    <input type="checkbox" defaultChecked={c === "All"} className="rounded" />
                    {c}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
            <input type="range" min={0} max={1000} defaultValue={500} className="w-full" />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>$0</span><span>$1,000</span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Rating</h3>
            {[5, 4, 3, 2].map((r) => (
              <label key={r} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer mb-1">
                <input type="checkbox" className="rounded" />
                {"★".repeat(r)}{"☆".repeat(5 - r)} & up
              </label>
            ))}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Availability</h3>
            {["In Stock", "Low Stock", "Out of Stock"].map((s) => (
              <label key={s} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer mb-1">
                <input type="checkbox" className="rounded" />
                {s}
              </label>
            ))}
          </div>
        </aside>

        {/* Products grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-gray-500">{products.length} products found</p>
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700">
              {sortOptions.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.id} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition group">
                <div className="relative h-44 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                  <span className="text-5xl">🛍️</span>
                  {p.badge && (
                    <span className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-full ${
                      p.badge === "Sale" ? "bg-red-500 text-white" :
                      p.badge === "New" ? "bg-green-500 text-white" :
                      "bg-indigo-600 text-white"
                    }`}>
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <span className="text-xs text-indigo-600 font-medium uppercase">{p.category}</span>
                  <h3 className="font-semibold text-gray-900 mt-1 mb-1">{p.name}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-yellow-400 text-sm">{"★".repeat(Math.floor(Number(p.rating)))}</span>
                    <span className="text-xs text-gray-400">{p.rating} ({p.reviews.toLocaleString()})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-gray-900">${p.price}</span>
                      {p.discount > 0 && (
                        <span className="ml-2 text-xs text-red-500 font-medium">-{p.discount}%</span>
                      )}
                    </div>
                    <span className={`text-xs font-medium ${
                      p.stock === "In Stock" ? "text-green-600" :
                      p.stock === "Low Stock" ? "text-yellow-600" : "text-red-500"
                    }`}>
                      {p.stock}
                    </span>
                  </div>
                  <button className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
