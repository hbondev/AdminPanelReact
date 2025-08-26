import { useState } from "react";
import { Link ,NavLink} from "react-router";

export default function SideDashboard() {
  const [storeOpen, setStoreOpen] = useState(false);

  return (
    <div className="h-screen overflow-y-auto">
      <div className="px-4 pt-6 pb-4 border-b border-gray-200">
        <div className="text-lg font-bold">پنل مدیریت</div>
        <div className="text-xs text-gray-500 mt-1">نسخه ۱.۰</div>
      </div>
      <nav className="p-2 text-right">
        <ul className="space-y-1">

          <li>
            
            <NavLink to="/"className="flex items-center justify-between rounded-md px-3 py-2 hover:bg-gray-50 text-gray-700" href="#">
              <span>داشبورد</span>
            </NavLink>
          </li>
          <li>
            
            <NavLink to="/pages" className="flex items-center justify-between rounded-md px-3 py-2 hover:bg-gray-50 text-gray-700" href="#">
              <span>صفحه ها</span>
            </NavLink>
          </li>
          <li>
            <button
              className="w-full rounded-md px-3 py-2 hover:bg-gray-50 text-gray-700 flex items-center justify-between focus:outline-none"
              aria-expanded={storeOpen}
              onClick={() => setStoreOpen((v) => !v)}
            >
              <span>فروشگاه</span>
              <span className={`transition-transform ${storeOpen ? "rotate-180" : "rotate-0"}`}>▾</span>
            </button>
            <div className={`mt-1 pr-3 space-y-1 ${storeOpen ? "block" : "hidden"}`}>
              <a className="block rounded-md px-3 py-2 hover:bg-gray-50 text-gray-600" href="#">سفارش ها</a>
              <a className="block rounded-md px-3 py-2 hover:bg-gray-50 text-gray-600" href="#">محصولات</a>
              <a className="block rounded-md px-3 py-2 hover:bg-gray-50 text-gray-600" href="#">موجودی</a>
              <a className="block rounded-md px-3 py-2 hover:bg-gray-50 text-gray-600" href="#">گزارش فروش</a>
            </div>
          </li>
          <li>
            <a className="flex items-center justify-between rounded-md px-3 py-2 hover:bg-gray-50 text-gray-700" href="#">
              <span>کاربران</span>
            </a>
          </li>
          <li>
            <a className="flex items-center justify-between rounded-md px-3 py-2 hover:bg-gray-50 text-gray-700" href="#">
              <span>تنظیمات</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
