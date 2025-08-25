import { useState } from "react";

export default function SideDashboard() {
  const [openMenu, setOpen] = useState(false);

  function menuHandler(e) {
    setOpen(!openMenu);
  }
  return (
    <>
      <div className="fixed right-0 bg-gray-400 min-w-100 text-right">
        <nav>
          <ul>
            <li className="p-2 hover:bg-gray-600 transition-all text-white">
              <a href="#">داشبورد</a>
            </li>
            <li className="p-2 hover:bg-gray-600 transition-all text-white">
              <a href="#">صفحه ها</a>
            </li>
            <li className="p-2 hover:bg-gray-600 transition-all text-white">
              <a href="#">فروشگاه</a>
              <div
                onClick={() => {
                  menuHandler("store");
                }}
                className={openMenu ? "" : "hidden"}
              >
                <a href="#">سفارش ها</a>
                <a href="#">محصولات</a>
                <a href="#">موجودی</a>
                <a href="#">گزارش فروش</a>
              </div>
            </li>

            <li className="p-2 hover:bg-gray-600 transition-all text-white">
              <a href="#">کاربران</a>
            </li>
            <li className="p-2 hover:bg-gray-600 transition-all text-white">
              <a href="#">تنظیمات</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
