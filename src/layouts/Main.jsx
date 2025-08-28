import { Outlet } from "react-router";
import Sidebar from "./header/Sidebar"; // بهتره اسمش عوض بشه به Sidebar
import Footer from "./footer/footer";

export default function Main({ title }) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* سایدبار و محتوا در یک ردیف */}
      <div className="flex flex-1">
        {/* سایدبار — عرض ثابت */}
        <Sidebar />

        {/* بخش اصلی — قسمتی که تغییر می‌کنه */}
        <main className="flex-1 p-6 bg-gray-50">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">{title}</h1>
          <Outlet />
        </main>
      </div>

      {/* فوتر — در پایین */}
      <Footer />
    </div>
  );
}
