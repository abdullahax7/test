const posts = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  title: [
    "How to Deploy Next.js to Production in 5 Minutes",
    "Understanding Server Components vs Client Components",
    "The Future of Edge Computing and What It Means for Developers",
    "Building Scalable APIs with Node.js and TypeScript",
    "CSS Grid vs Flexbox: When to Use Each",
    "Why We Migrated from Vercel to Self-Hosted Coolify",
    "Optimizing Images in Next.js for Maximum Performance",
    "A Deep Dive into React 19 New Features",
    "Database Indexing Strategies for High-Traffic Apps",
    "Monorepos with Turborepo: A Practical Guide",
  ][i % 10],
  category: ["DevOps", "React", "Performance", "Backend", "CSS", "Infrastructure"][i % 6],
  author: ["Alice Chen", "Bob Martinez", "Priya Nair", "David Kim", "Sofia Torres"][i % 5],
  date: new Date(2024, i % 12, (i % 28) + 1).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }),
  readTime: `${(i % 8) + 3} min read`,
  excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  views: Math.floor(Math.random() * 50000) + 1000,
}));

const categories = ["All", "DevOps", "React", "Performance", "Backend", "CSS", "Infrastructure"];

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Blog</h1>
        <p className="text-lg text-gray-500">Tutorials, insights, and updates from our engineering team.</p>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((c) => (
          <span key={c} className="px-4 py-1.5 rounded-full text-sm font-medium bg-white border border-gray-200 text-gray-600 hover:bg-indigo-50 hover:border-indigo-300 cursor-pointer transition">
            {c}
          </span>
        ))}
      </div>

      {/* Featured post */}
      <div className="bg-indigo-600 text-white rounded-2xl p-8 mb-10">
        <span className="text-indigo-200 text-sm font-medium uppercase tracking-wide">Featured</span>
        <h2 className="text-3xl font-bold mt-2 mb-3">How to Deploy Next.js to Production in 5 Minutes</h2>
        <p className="text-indigo-100 mb-4">A step-by-step walkthrough of deploying a production-ready Next.js application using Coolify with zero downtime and automatic SSL.</p>
        <div className="flex items-center gap-4 text-sm text-indigo-200">
          <span>Alice Chen</span>
          <span>•</span>
          <span>Jan 1, 2024</span>
          <span>•</span>
          <span>8 min read</span>
          <span>•</span>
          <span>42,391 views</span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article key={post.id} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition">
            <div className="h-40 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
              <span className="text-4xl">📝</span>
            </div>
            <div className="p-5">
              <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">{post.category}</span>
              <h3 className="font-bold text-gray-900 mt-1 mb-2 leading-snug">{post.title}</h3>
              <p className="text-sm text-gray-500 mb-4 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>{post.author}</span>
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-400 mt-1">
                <span>{post.date}</span>
                <span>{post.views.toLocaleString()} views</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Load more */}
      <div className="mt-12 text-center">
        <button className="bg-white border border-gray-300 px-8 py-3 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition">
          Load More Posts
        </button>
      </div>
    </div>
  );
}
