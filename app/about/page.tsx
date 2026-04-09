const milestones = [
  { year: "2018", title: "Founded", desc: "Two engineers frustrated with slow deployments started building an alternative in a garage." },
  { year: "2019", title: "Seed Round", desc: "Raised $2.5M seed funding. Launched private beta with 200 teams." },
  { year: "2020", title: "Public Launch", desc: "Opened to the public. 10,000 developers signed up in the first week." },
  { year: "2021", title: "Series A", desc: "Raised $18M Series A. Expanded to 5 global regions and 50 team members." },
  { year: "2022", title: "1M Deployments", desc: "Crossed 1 million deployments. Launched enterprise tier with SLA guarantees." },
  { year: "2023", title: "Series B", desc: "Raised $65M Series B. Launched 30 new regions and AI-assisted deployment optimization." },
  { year: "2024", title: "Today", desc: "Serving 50,000+ teams globally. 99.99% uptime SLA. Continuing to push the limits." },
];

const values = [
  { title: "Developer First", desc: "Every decision starts with asking: does this make developers' lives better? If not, we don't ship it." },
  { title: "Radical Transparency", desc: "We publish our uptime history, incident reports, and roadmap publicly. No hiding behind PR speak." },
  { title: "Ship Fast, Fix Faster", desc: "We believe in iterating quickly and owning mistakes. Speed without accountability is recklessness." },
  { title: "Global by Default", desc: "We build for developers everywhere — from San Francisco to Lagos to Jakarta." },
  { title: "Sustainability", desc: "We're committed to carbon-neutral infrastructure by 2025 and carbon-negative by 2027." },
  { title: "Open Source", desc: "We contribute back. Several of our core tools are open-sourced and maintained by our team." },
];

const pressItems = [
  { outlet: "TechCrunch", title: "This startup is making Kubernetes invisible to developers", date: "March 2024" },
  { outlet: "The Verge", title: "The deployment platform that's stealing Vercel's thunder", date: "January 2024" },
  { outlet: "Hacker News", title: "Ask HN: We built a self-hostable deployment platform — #1 for 3 days", date: "November 2023" },
  { outlet: "InfoQ", title: "How SpeedTest achieves sub-10ms global failover", date: "October 2023" },
  { outlet: "Dev.to", title: "I migrated 20 apps from Heroku to SpeedTest in one weekend", date: "August 2023" },
];

const faqs = [
  { q: "What makes you different from Vercel or Netlify?", a: "We're infrastructure-agnostic — deploy to any cloud or your own servers. No vendor lock-in, ever." },
  { q: "Can I self-host the platform?", a: "Yes. Our Community Edition is 100% open-source. Run it on your own hardware with full control." },
  { q: "What frameworks do you support?", a: "Next.js, Nuxt, SvelteKit, Remix, Astro, plain Node.js, Python, Go, Rust, PHP, and more via Nixpacks." },
  { q: "Do you support private registries?", a: "Yes. GHCR, Docker Hub, AWS ECR, Google Artifact Registry, and custom private registries are all supported." },
  { q: "How does your pricing work?", a: "We charge based on resource usage — CPU, memory, and bandwidth. No surprise bills. Set hard limits." },
  { q: "What's your uptime SLA?", a: "Enterprise customers get a 99.99% monthly uptime SLA with financial penalties if we miss it." },
  { q: "Do you have SOC 2 compliance?", a: "Yes, we are SOC 2 Type II certified as of Q1 2024. GDPR and HIPAA compliance available on Enterprise." },
  { q: "How do database backups work?", a: "Automatic daily backups with 30-day retention. Point-in-time recovery available on Pro and Enterprise." },
];

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      {/* Mission */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Our Mission</h1>
        <p className="text-xl text-gray-500 leading-relaxed">
          We believe deploying software should be boring. Not in a bad way — in the "it just works, every time" way. We're eliminating the gap between writing code and running it in production for every developer on the planet.
        </p>
      </section>

      {/* Stats bar */}
      <section className="bg-indigo-600 rounded-2xl p-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[
            { value: "50,000+", label: "Teams Worldwide" },
            { value: "1B+", label: "Deployments Served" },
            { value: "35", label: "Global Regions" },
            { value: "99.99%", label: "Uptime SLA" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-extrabold">{s.value}</p>
              <p className="text-indigo-200 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Journey</h2>
        <div className="relative border-l-2 border-indigo-200 pl-8 space-y-8 max-w-2xl mx-auto">
          {milestones.map((m) => (
            <div key={m.year} className="relative">
              <span className="absolute -left-10 w-5 h-5 rounded-full bg-indigo-600 border-4 border-white shadow" />
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">{m.year}</span>
              <h3 className="font-bold text-gray-900 mt-1">{m.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What We Stand For</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
              <p className="text-sm text-gray-500">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Press */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">In the Press</h2>
        <div className="space-y-4">
          {pressItems.map((p) => (
            <div key={p.title} className="bg-white rounded-xl border border-gray-200 p-5 flex items-center justify-between shadow-sm">
              <div>
                <span className="text-xs font-bold text-indigo-600 uppercase">{p.outlet}</span>
                <p className="font-medium text-gray-900 mt-0.5">{p.title}</p>
              </div>
              <span className="text-xs text-gray-400 whitespace-nowrap ml-4">{p.date}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">{f.q}</h3>
              <p className="text-sm text-gray-500">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
