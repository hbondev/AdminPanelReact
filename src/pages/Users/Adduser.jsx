export default function Adduser({ title }) {
  return (
    <>
      <h1>{title}</h1>
      <form className="p-5">
        <div className="grid grid-cols-2 gap-2">
          <input
            className="px-3 py-2 border border-gray-400 focus:outline-indigo-300 rounded-md"
            type="text"
            placeholder="نام و نام خانوادگی"
          />
          <input
            className="px-3 py-2 border border-gray-400 focus:outline-indigo-300 rounded-md"
            type="text"
            placeholder="شماره موبایل"
          />
        </div>
        <div className="grid grid-cols-1 gap-2 mt-2"></div>

        <div className="grid grid-cols-3 gap-2">
          <input
            className="px-3 py-2 border border-gray-400 focus:outline-indigo-300 rounded-md"
            type="text"
            placeholder="تاریخ تولد"
          />
          <input
            className="px-3 py-2 border border-gray-400 focus:outline-indigo-300 rounded-md"
            type="password"
            placeholder="رمز عبور"
          />
          <input
            className="px-3 py-2 border border-gray-400 focus:outline-indigo-300 rounded-md"
            type="email"
            placeholder="ایمیل"
          />
        </div>

        <div className="grid grid-cols-3 gap-2 mt-2">
          <input
            className="px-3 py-2 border border-gray-400 focus:outline-indigo-300 rounded-md"
            type="text"
            placeholder="استان"
          />
          <input
            className="px-3 py-2 border border-gray-400 focus:outline-indigo-300 rounded-md"
            type="text"
            placeholder="شهر"
          />
          <input
            className="px-3 py-2 border border-gray-400 focus:outline-indigo-300 rounded-md"
            type="text"
            placeholder="کد پستی"
          />
        </div>

        <div className="grid grid-cols-1 gap-2 mt-2">
          <input
            className="px-3 py-2 border border-gray-400 focus:outline-indigo-300 rounded-md"
            type="text"
            placeholder="آدرس"
          />
        </div>
        <div className="flex justify-start items-center gap-3.5 mt-10">
          <button className=" text-white bg-green-400 hover:bg-green-600 transition-colors  p-2 rounded-md">
            ذخیره
          </button>
          <button className="bg-gray-500 hover:bg-gray-600 transition-colors  text-white p-2 rounded-md">
            بازگشت
          </button>
        </div>
      </form>
    </>
  );
}
