const kpis = [
  { label: "Total Revenue", value: "$128,430", change: "+14.2%", up: true },
  { label: "Active Users", value: "24,812", change: "+9.1%", up: true },
  { label: "New Signups", value: "1,284", change: "-2.3%", up: false },
  { label: "Churn Rate", value: "2.4%", change: "-0.5%", up: true },
  { label: "Avg. Session", value: "4m 32s", change: "+1m 12s", up: true },
  { label: "Support Tickets", value: "142", change: "+18", up: false },
  { label: "Deployments", value: "3,412", change: "+312", up: true },
  { label: "Error Rate", value: "0.04%", change: "-0.01%", up: true },
];

const recentActivity = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  user: ["alice@example.com", "bob@dev.io", "priya@tech.com", "james@corp.net", "yuki@startup.co"][i % 5],
  action: ["Deployed app", "Scaled service", "Updated env vars", "Created project", "Deleted branch", "Added domain", "Rotated secrets"][i % 7],
  project: ["my-api", "frontend-v2", "auth-service", "data-pipeline", "landing-page"][i % 5],
  time: `${i + 1}m ago`,
  status: ["success", "success", "success", "warning", "error"][i % 5],
}));

const servers = [
  { name: "us-east-1 (Primary)", cpu: 42, memory: 68, disk: 55, requests: "12.4K/s", status: "healthy" },
  { name: "eu-west-1", cpu: 61, memory: 74, disk: 38, requests: "8.1K/s", status: "healthy" },
  { name: "ap-southeast-1", cpu: 28, memory: 45, disk: 62, requests: "5.3K/s", status: "healthy" },
  { name: "us-west-2", cpu: 89, memory: 91, disk: 70, requests: "3.8K/s", status: "warning" },
  { name: "sa-east-1", cpu: 12, memory: 33, disk: 28, requests: "1.2K/s", status: "healthy" },
];

const topProjects = Array.from({ length: 15 }, (_, i) => ({
  name: ["my-api", "frontend-v2", "auth-service", "data-pipeline", "landing-page", "admin-panel", "mobile-api", "docs-site", "worker-jobs", "analytics"][i % 10],
  env: ["Production", "Staging", "Production", "Production", "Preview"][i % 5],
  deploys: Math.floor(Math.random() * 200) + 10,
  uptime: (98 + Math.random() * 2).toFixed(2) + "%",
  lastDeploy: `${i + 1}h ago`,
  memory: `${Math.floor(Math.random() * 512) + 64}MB`,
}));

function BarMeter({ value, color }: { value: number; color: string }) {
  return (
    <div className="w-full bg-gray-100 rounded-full h-2">
      <div className={`h-2 rounded-full ${color}`} style={{ width: `${value}%` }} />
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Live overview of your infrastructure and applications.</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {kpis.map((k) => (
          <div key={k.label} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <p className="text-xs text-gray-500 uppercase tracking-wide">{k.label}</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{k.value}</p>
            <p className={`text-sm font-medium mt-1 ${k.up ? "text-green-600" : "text-red-500"}`}>
              {k.up ? "↑" : "↓"} {k.change}
            </p>
          </div>
        ))}
      </div>

      {/* Servers */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-900">Server Health</h2>
        </div>
        <div className="divide-y divide-gray-50">
          {servers.map((s) => (
            <div key={s.name} className="px-6 py-4 grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
              <div className="md:col-span-2">
                <p className="font-medium text-gray-900 text-sm">{s.name}</p>
                <p className="text-xs text-gray-400">{s.requests} req/s</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">CPU {s.cpu}%</p>
                <BarMeter value={s.cpu} color={s.cpu > 80 ? "bg-red-500" : s.cpu > 60 ? "bg-yellow-400" : "bg-green-500"} />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Memory {s.memory}%</p>
                <BarMeter value={s.memory} color={s.memory > 80 ? "bg-red-500" : s.memory > 60 ? "bg-yellow-400" : "bg-green-500"} />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Disk {s.disk}%</p>
                <BarMeter value={s.disk} color={s.disk > 80 ? "bg-red-500" : "bg-blue-500"} />
              </div>
              <div>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  s.status === "healthy" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                }`}>
                  {s.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top projects */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-900">Top Projects</h2>
          </div>
          <div className="divide-y divide-gray-50">
            {topProjects.map((p, i) => (
              <div key={i} className="px-6 py-3 flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm text-gray-900">{p.name}</p>
                  <p className="text-xs text-gray-400">{p.env} · {p.lastDeploy}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-green-600">{p.uptime}</p>
                  <p className="text-xs text-gray-400">{p.deploys} deploys · {p.memory}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-900">Recent Activity</h2>
          </div>
          <div className="divide-y divide-gray-50 max-h-96 overflow-y-auto">
            {recentActivity.map((a) => (
              <div key={a.id} className="px-6 py-3 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-800">
                    <span className="font-medium">{a.user}</span> {a.action}
                  </p>
                  <p className="text-xs text-gray-400">{a.project} · {a.time}</p>
                </div>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                  a.status === "success" ? "bg-green-100 text-green-700" :
                  a.status === "warning" ? "bg-yellow-100 text-yellow-700" :
                  "bg-red-100 text-red-700"
                }`}>
                  {a.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
