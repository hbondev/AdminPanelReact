import { useState } from "react";
import { NavLink } from "react-router"; // تغییر: react-router -> react-router-dom
import { GiHamburgerMenu } from "react-icons/gi"; // آیکون بستن هم اضافه کردیم
import { IoIosClose } from "react-icons/io";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // نام active رو به isOpen تغییر دادیم

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* آیکون همبرگر — همیشه در دسترس در موبایل */}
      <div className="md:hidden fixed top-4 left-4 z-30">
        <button
          onClick={toggleSidebar}
          className="text-gray-700 bg-white p-2 rounded shadow-md"
        >
          {isOpen ? <IoIosClose size={24} /> : <GiHamburgerMenu size={24} />}
        </button>
      </div>

      {/* سایدبار */}
      <aside
        className={`fixed top-0 left-0 z-20 h-screen w-60 bg-stone-800 text-white transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:static md:w-60`}
      >
        {/* هدر سایدبار (اختیاری) */}
        <div className="p-6 border-b border-stone-700">
          <h3 className="text-lg font-semibold">پنل ادمین</h3>
        </div>

        {/* منو */}
        <nav className="mt-4">
          <ul className="space-y-1 px-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-gray-700 text-white"
                      : "text-gray-300 hover:bg-stone-700"
                  }`
                }
                onClick={closeSidebar} // در موبایل بعد از کلیک بسته بشه
              >
                میز کار
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-gray-700 text-white"
                      : "text-gray-300 hover:bg-stone-700"
                  }`
                }
                onClick={closeSidebar}
              >
                فروشگاه
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-gray-700 text-white"
                      : "text-gray-300 hover:bg-stone-700"
                  }`
                }
                onClick={closeSidebar}
              >
                کاربران
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-gray-700 text-white"
                      : "text-gray-300 hover:bg-stone-700"
                  }`
                }
                onClick={closeSidebar}
              >
                وبلاگ
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* overlay (پس‌زمینه تیره در موبایل وقتی سایدبار بازه) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#00000047] bg-opacity-50 z-10 md:hidden"
          onClick={closeSidebar}
        />
      )}
    </>
  );
}
