import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Adminapi from "../../utils/Services/userServices"; // فرض می‌کنیم برای هر دو استفاده می‌شه

export default function Details({ title, type }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // State برای users
  const [user, setUser] = useState({
    name: "",
    username: "",
    phonenumber: "",
    birth: "",
    email: "",
    password: "",
    createdAt: "",
    status: "",
    id: "",
  });

  // State برای posts
  const [post, setPost] = useState({
    title: "",
    content: "",
    date: "",
    status: "منتشر شده",
  });

  // Loading و Error
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // تعیین اینکه در حالت ایجاد یا ویرایش هستیم
  const isEditing = !!id;

  // بارگذاری داده در حالت ویرایش
  useEffect(() => {
    if (type === "users" && id) {
      setLoading(true);
      Adminapi.get(`/users/${id}`)
        .then((res) => setUser(res.data))
        .catch((err) => setError("خطا در بارگیری کاربر"))
        .finally(() => setLoading(false));
    }

    if (type === "posts" && id) {
      setLoading(true);
      Adminapi.get(`/posts/${id}`)
        .then((res) => setPost(res.data))
        .catch((err) => setError("خطا در بارگیری پست"))
        .finally(() => setLoading(false));
    }
  }, [type, id]);

  // مدیریت تغییر فیلدها
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (type === "users") {
      setUser((prev) => ({ ...prev, [name]: value }));
    } else if (type === "posts") {
      setPost((prev) => ({ ...prev, [name]: value }));
    }
  };

  // مدیریت تغییر select (وضعیت)
  const handleStatusChange = (e) => {
    if (type === "users") {
      setUser((prev) => ({ ...prev, status: e.target.value }));
    } else if (type === "posts") {
      setPost((prev) => ({ ...prev, status: e.target.value }));
    }
  };

  // ارسال فرم
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const data = type === "users" ? user : post;

    const request = isEditing
      ? Adminapi.put(`/${type}/${id}`, data)
      : Adminapi.post(`/${type}`, data);

    request
      .then(() => {
        alert(
          `${type === "users" ? "کاربر" : "پست"} با موفقیت ${
            isEditing ? "به‌روزرسانی" : "ایجاد"
          } شد.`
        );
        navigate(`/${type}`);
      })
      .catch((err) => {
        setError(err.response?.data?.message || "خطا در ارسال داده");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading && isEditing) {
    return <div className="text-center py-10">در حال بارگیری...</div>;
  }

  if (error && !loading) {
    return (
      <div className="p-4 bg-red-100 text-red-700 rounded mx-4 my-6">
        {error}
        <button onClick={() => setError("")} className="ml-4 text-sm underline">
          بستن
        </button>
      </div>
    );
  }

  return (
    <>
      {type === "users" && (
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
            {title}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
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
                  value={user.name}
                  onChange={handleChange}
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
                  value={user.username}
                  onChange={handleChange}
                  placeholder="mohammad_123"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-gray-900"
                />
              </div>
            </div>

            {/* تاریخ تولد + ایمیل */}
            <div className="flex gap-6">
              <div className="flex-1">
                <label
                  htmlFor="birth"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  تاریخ تولد
                </label>
                <input
                  type="date"
                  id="birth"
                  name="birth"
                  value={user.birth}
                  onChange={handleChange}
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
                  value={user.email}
                  onChange={handleChange}
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
                value={user.password}
                onChange={handleChange}
                placeholder={id ? "رمز عبور جدید (در صورت تغییر)" : "رمز عبور"}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-gray-900"
              />
            </div>

            {/* وضعیت کاربر */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                وضعیت
              </label>
              <select
                value={user.status}
                onChange={handleStatusChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option>فعال</option>
                <option>غیرفعال</option>
              </select>
            </div>

            {/* دکمه‌ها */}
            <div className="flex gap-4 pt-6">
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg shadow disabled:opacity-70 disabled:cursor-not-allowed hover:from-indigo-600 hover:to-purple-700 transition-all duration-200"
              >
                {loading
                  ? "در حال پردازش..."
                  : id
                  ? "بروزرسانی کاربر"
                  : "ایجاد کاربر"}
              </button>
              <Link
                to="/users"
                className="px-6 py-2 bg-gray-500 text-white font-medium rounded-lg shadow hover:bg-gray-600 transition"
              >
                بازگشت
              </Link>
            </div>
          </form>
        </div>
      )}

      {type === "posts" && (
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
            {title}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
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
                value={post.date}
                onChange={handleChange}
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
                value={post.title}
                onChange={handleChange}
                placeholder="عنوان جذابی بنویسید..."
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
                value={post.content}
                onChange={handleChange}
                placeholder="محتوای پست خود را اینجا بنویسید..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none text-gray-900"
              />
            </div>

            {/* وضعیت انتشار */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                وضعیت انتشار
              </label>
              <select
                value={post.status}
                onChange={handleStatusChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option>منتشر شده</option>
                <option>عدم انتشار</option>
                <option>پیش‌نویس</option>
              </select>
            </div>

            {/* دکمه‌ها */}
            <div className="flex gap-4 pt-6">
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg shadow disabled:opacity-70 disabled:cursor-not-allowed hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
              >
                {loading
                  ? "در حال پردازش..."
                  : id
                  ? "بروزرسانی نوشته"
                  : "ایجاد نوشته"}
              </button>
              <Link
                to="/blog"
                className="px-6 py-2 bg-gray-500 text-white font-medium rounded-lg shadow hover:bg-gray-600 transition"
              >
                بازگشت
              </Link>
            </div>
          </form>
        </div>
      )}

      {!["users", "posts"].includes(type) && (
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
