const stats = [
  { label: "Total Users", value: "124,832", change: "+12.4%" },
  { label: "Revenue", value: "$984,210", change: "+8.1%" },
  { label: "Active Projects", value: "3,412", change: "+5.3%" },
  { label: "Uptime", value: "99.98%", change: "+0.02%" },
  { label: "API Calls", value: "18.4M", change: "+22.7%" },
  { label: "Deployments", value: "5,231", change: "+17.9%" },
];

const features = [
  { title: "Lightning Fast", desc: "Optimized for maximum performance with edge caching and CDN delivery across 200+ locations worldwide." },
  { title: "Scalable Infrastructure", desc: "Auto-scales from zero to millions of requests without any manual intervention or configuration." },
  { title: "Global Reach", desc: "Deploy to 35 regions simultaneously and serve users from the closest data center automatically." },
  { title: "Zero Downtime", desc: "Blue-green deployments ensure your users never experience downtime during updates or migrations." },
  { title: "Real-time Analytics", desc: "Get instant insights into performance, errors, and user behavior with our built-in analytics dashboard." },
  { title: "Secure by Default", desc: "End-to-end encryption, DDoS protection, and automatic SSL certificates included at no extra cost." },
  { title: "CI/CD Integration", desc: "Seamlessly integrates with GitHub, GitLab, and Bitbucket for automated deployments on every push." },
  { title: "24/7 Support", desc: "Our expert team is always available to help you with any issues, questions, or performance concerns." },
];

const testimonials = [
  { name: "Sarah Johnson", role: "CTO at TechCorp", text: "Switched from AWS and our deployment time went from 45 minutes to under 2 minutes. Incredible." },
  { name: "Marcus Lee", role: "Lead Engineer at Startup X", text: "The best platform I've used in 15 years. Simple, fast, and reliable. Highly recommended." },
  { name: "Priya Patel", role: "DevOps at Fintech Co", text: "Zero downtime deployments and auto-scaling saved us during our product launch. 10/10." },
  { name: "James O'Brien", role: "Solo Developer", text: "I run 12 side projects and manage them all from one dashboard. It's like magic." },
  { name: "Yuki Tanaka", role: "Platform Engineer", text: "The observability tools alone are worth the price. We caught a memory leak within minutes." },
  { name: "Fatima Al-Hassan", role: "Backend Lead", text: "Migrated our monolith to microservices in a weekend thanks to the intuitive UI and docs." },
];

const pricing = [
  { plan: "Hobby", price: "$0", features: ["3 projects", "1 GB storage", "100 GB bandwidth", "Community support", "Shared CPU"] },
  { plan: "Pro", price: "$29/mo", features: ["Unlimited projects", "50 GB storage", "1 TB bandwidth", "Priority support", "Dedicated CPU", "Custom domains"] },
  { plan: "Enterprise", price: "Custom", features: ["Unlimited everything", "SLA guarantee", "Dedicated infra", "24/7 phone support", "Custom integrations", "SSO & SAML"] },
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
      {/* Hero */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
          Deploy Faster.<br />Scale Smarter.
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          The modern platform for deploying full-stack applications with zero configuration. Go from code to production in seconds.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">Get Started Free</button>
          <button className="border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">View Docs</button>
        </div>
      </section>

      {/* Stats */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-8">Platform at a Glance</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <p className="text-sm text-gray-500">{s.label}</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{s.value}</p>
              <p className="text-sm text-green-600 mt-1">{s.change} this month</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-8">Everything You Need</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-8">Loved by Developers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <p className="text-gray-600 italic mb-4">"{t.text}"</p>
              <p className="font-semibold text-gray-900">{t.name}</p>
              <p className="text-sm text-gray-400">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-8">Simple Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.map((p) => (
            <div key={p.plan} className={`rounded-xl border p-8 shadow-sm ${p.plan === "Pro" ? "border-indigo-500 bg-indigo-50" : "bg-white border-gray-200"}`}>
              <h3 className="text-xl font-bold text-gray-900">{p.plan}</h3>
              <p className="text-3xl font-extrabold text-indigo-600 mt-2">{p.price}</p>
              <ul className="mt-6 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="text-green-500">✓</span> {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full py-2 rounded-lg font-semibold transition ${p.plan === "Pro" ? "bg-indigo-600 text-white hover:bg-indigo-700" : "border border-gray-300 hover:bg-gray-100"}`}>
                Choose {p.plan}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
