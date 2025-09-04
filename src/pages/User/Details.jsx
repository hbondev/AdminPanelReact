import { Link, useNavigate, useParams } from "react-router-dom";

export default function Details({ title, type }) {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <>
      {type === "users" ? (
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
            {title}
          </h1>
          <form className="space-y-6">
            {/* نام و نام خانوادگی + نام کاربری */}
            <div className="flex gap-6">
              <div className="flex-1">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  نام و نام خانوادگی
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="محمدمهدی رضایی"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-gray-900"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="username"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  نام کاربری
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="mohammad_123"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-gray-900"
                />
              </div>
            </div>

            {/* تاریخ تولد + ایمیل */}
            <div className="flex gap-6">
              <div className="flex-1">
                <label
                  htmlFor="birthDate"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  تاریخ تولد
                </label>
                <input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  ایمیل
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="user@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-gray-900"
                />
              </div>
            </div>

            {/* رمز عبور */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                رمز عبور
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder={id ? "رمز عبور جدید (در صورت تغییر)" : "رمز عبور"}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-gray-900"
              />
            </div>

            {/* دکمه‌ها */}
            <div className="flex gap-4 pt-6">
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg shadow hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-200 transform hover:scale-105"
              >
                {id ? "بروزرسانی کاربر" : "ایجاد کاربر"}
              </button>
              <Link
                to="/users"
                className="px-6 py-2 bg-gray-500 text-white font-medium rounded-lg shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200"
              >
                بازگشت
              </Link>
            </div>
          </form>
        </div>
      ) : type === "posts" ? (
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
            {title}
          </h1>
          <form className="space-y-6">
            {/* تاریخ انتشار */}
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                تاریخ انتشار
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            {/* عنوان پست */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                عنوان پست
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="عنوان جذابی برای پست خود بنویسید..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-gray-900"
              />
            </div>

            {/* محتوا */}
            <div>
              <label
                htmlFor="content"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                محتوا
              </label>
              <textarea
                id="content"
                name="content"
                rows="6"
                placeholder="محتوای پست خود را اینجا بنویسید..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none text-gray-900"
              />
            </div>

            {/* وضعیت انتشار */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                وضعیت انتشار
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition">
                <option>منتشر شده</option>
                <option>عدم انتشار</option>
                <option>پیش‌نویس</option>
              </select>
            </div>

            {/* دکمه‌ها */}
            <div className="flex gap-4 pt-6">
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg shadow hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 transform hover:scale-105"
              >
                {id ? "بروزرسانی نوشته" : "ایجاد نوشته"}
              </button>
              <Link
                to="/blog"
                className="px-6 py-2 bg-gray-500 text-white font-medium rounded-lg shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200"
              >
                بازگشت
              </Link>
            </div>
          </form>
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-xl text-red-600">نوع ناشناخته: {type}</p>
          <Link to="/" className="text-blue-500 hover:underline mt-2 block">
            بازگشت به صفحه اصلی
          </Link>
        </div>
      )}
    </>
  );
}
