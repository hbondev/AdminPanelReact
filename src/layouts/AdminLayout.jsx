import SideDashboard from "../pages/Dashboard/SideDashboard";
import Dashboard from "../pages/Dashboard/Dashboard";

export default function AdminLayout({title}) {
  return (
    <div className="min-h-screen  text-gray-900">
      <div className="flex flex-row-reverse">
        <aside className="w-64 min-h-screen border-l border-gray-200 bg-white fixed right-0 top-0">
          <SideDashboard />
        </aside>
        <main className="flex-1 mr-64 p-4 md:p-6 lg:p-8">
          <header className="mb-6 flex items-center justify-between">
            <h1 className="text-xl font-bold">{title}</h1>
          </header>
          <Dashboard />
        </main>
      </div>
    </div>
  );
}
