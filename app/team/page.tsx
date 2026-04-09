const departments = ["Engineering", "Design", "Product", "Marketing", "DevOps", "Support"];

const members = Array.from({ length: 36 }, (_, i) => ({
  id: i + 1,
  name: [
    "Alice Chen", "Bob Martinez", "Priya Nair", "David Kim", "Sofia Torres",
    "James O'Brien", "Yuki Tanaka", "Fatima Al-Hassan", "Liam Wilson", "Noah Garcia",
    "Emma Johnson", "Olivia Brown",
  ][i % 12],
  role: [
    "Senior Engineer", "Product Designer", "Product Manager", "DevOps Lead", "Frontend Engineer",
    "Backend Engineer", "UX Researcher", "Marketing Lead", "Data Engineer", "Support Lead",
    "QA Engineer", "Tech Lead",
  ][i % 12],
  department: departments[i % 6],
  location: ["San Francisco, US", "London, UK", "Berlin, DE", "Tokyo, JP", "Sydney, AU", "Toronto, CA"][i % 6],
  joined: `${2019 + (i % 5)}`,
  projects: Math.floor(Math.random() * 20) + 2,
  commits: Math.floor(Math.random() * 3000) + 100,
  bio: "Passionate about building scalable systems and great user experiences. Loves open source and contributing to the developer community.",
  skills: [
    ["TypeScript", "React", "Node.js", "PostgreSQL"],
    ["Figma", "CSS", "Prototyping", "User Research"],
    ["Roadmapping", "Agile", "SQL", "Jira"],
    ["Docker", "Kubernetes", "Terraform", "AWS"],
  ][i % 4],
}));

const openRoles = [
  { title: "Senior Full-Stack Engineer", dept: "Engineering", location: "Remote", type: "Full-time" },
  { title: "Product Designer", dept: "Design", location: "San Francisco", type: "Full-time" },
  { title: "DevOps Engineer", dept: "DevOps", location: "Remote", type: "Full-time" },
  { title: "Technical Writer", dept: "Product", location: "Remote", type: "Contract" },
  { title: "Growth Marketing Manager", dept: "Marketing", location: "New York", type: "Full-time" },
  { title: "Customer Success Engineer", dept: "Support", location: "Remote", type: "Full-time" },
];

export default function TeamPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Meet the Team</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          We're a globally distributed team of {members.length} passionate engineers, designers, and makers building the future of deployment.
        </p>
      </div>

      {/* Department breakdown */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {departments.map((dept) => {
          const count = members.filter((m) => m.department === dept).length;
          return (
            <div key={dept} className="bg-white rounded-xl border border-gray-200 p-5 text-center shadow-sm">
              <p className="text-2xl font-bold text-indigo-600">{count}</p>
              <p className="text-sm text-gray-500 mt-1">{dept}</p>
            </div>
          );
        })}
      </div>

      {/* Team grid */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">All Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((m) => (
            <div key={m.id} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg shrink-0">
                  {m.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{m.name}</h3>
                  <p className="text-sm text-indigo-600">{m.role}</p>
                  <p className="text-xs text-gray-400">{m.department}</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4 line-clamp-2">{m.bio}</p>
              <div className="mt-4 flex flex-wrap gap-1">
                {m.skills.map((s) => (
                  <span key={s} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{s}</span>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center border-t border-gray-100 pt-4">
                <div>
                  <p className="text-base font-bold text-gray-900">{m.projects}</p>
                  <p className="text-xs text-gray-400">Projects</p>
                </div>
                <div>
                  <p className="text-base font-bold text-gray-900">{m.commits.toLocaleString()}</p>
                  <p className="text-xs text-gray-400">Commits</p>
                </div>
                <div>
                  <p className="text-base font-bold text-gray-900">{m.joined}</p>
                  <p className="text-xs text-gray-400">Joined</p>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-3 flex items-center gap-1">
                📍 {m.location}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Open roles */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Open Positions</h2>
        <div className="space-y-4">
          {openRoles.map((r) => (
            <div key={r.title} className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm hover:shadow-md transition">
              <div>
                <h3 className="font-bold text-gray-900">{r.title}</h3>
                <p className="text-sm text-gray-500">{r.dept} · {r.location} · {r.type}</p>
              </div>
              <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition whitespace-nowrap">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
