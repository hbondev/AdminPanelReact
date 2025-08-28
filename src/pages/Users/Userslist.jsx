import { VscEdit, VscTrash, VscAdd } from "react-icons/vsc";
import { Link } from "react-router";

export default function Userslist({ title }) {
  return (
    <>
      <div className="flex justify-between items-center p-4">
        <h1>{title}</h1>
        <span className="bg-green-400 shadow p-2 rounded-md ">
          <Link to={"/users/add"}>
            <VscAdd className="text-white   w-5 h-5" />
          </Link>
        </span>
      </div>
      <div className="px-4">
        <form action="">
          <input
            type="search"
            name="searchuser"
            placeholder="جستجوی کاربر"
            className="px-3 py-2 border border-gray-400 focus:outline-indigo-300 rounded-md"
          />
        </form>
      </div>
      <div className="overflow-x-auto p-4">
        <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
          {/* Header */}
          <thead className="bg-gradient-to-t from-gray-900 to-gray-700 text-white">
            <tr className="text-center">
              <th className="py-4 px-6  text-sm font-normal  tracking-wider">
                #
              </th>
              <th className="py-4 px-6  text-sm font-normal  tracking-wider">
                نام و نام خانوادگی
              </th>
              <th className="py-4 px-6  text-sm font-normal  tracking-wider">
                شماره
              </th>
              <th className="py-4 px-6  text-sm font-normal  tracking-wider">
                وضعیت
              </th>
              <th className="py-4 px-6  text-sm font-semibold  tracking-wider"></th>
              <th className="py-4 px-6  text-sm font-semibold  tracking-wider"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="6" className="text-red-600 px-4 py-3 text-center">
                موردی یافت نشد!
              </td>
            </tr>
          </tbody>
          {/* Body */}
          {/* <tbody className="divide-y divide-gray-200">
            <tr className="text-center hover:bg-gray-50 transition duration-150 ease-in-out">
              <td className="py-4 px-6  border-gray-100 text-gray-700 ">1</td>
              <td className="py-4 px-6  border-gray-100 text-gray-700 ">
                حسین بنیادی
              </td>
              <td className="py-4 px-6  border-gray-100 text-gray-700">
                09101414845
              </td>
              <td className="py-4 px-6  border-gray-100 text-gray-700">
                <span className="bg-green-300 text-xs font-medium text-green-700 rounded-lg p-2">
                  فعال
                </span>
              </td>
              <td>
                <VscEdit className="text-amber-600" />
              </td>
              <td>
                <VscTrash className="text-red-600" />
              </td>
            </tr>
            <tr className="text-center hover:bg-gray-50 transition duration-150 ease-in-out">
              <td className="py-4 px-6  border-gray-100 text-gray-700">2</td>
              <td className="py-4 px-6  border-gray-100 text-gray-700">
                ناصر غلامی
              </td>
              <td className="py-4 px-6  border-gray-100 text-gray-700">
                09351684845
              </td>
              <td className="py-2 px-2  border-gray-100 text-gray-700">
                <span className="bg-amber-200 text-xs font-medium  text-amber-700 rounded-lg p-2">
                  منتظر تایید
                </span>
              </td>
              <td>
                <VscEdit className="text-amber-600" />
              </td>
              <td>
                <VscTrash className="text-red-600" />
              </td>
            </tr>

            <tr className="text-center hover:bg-gray-50 transition duration-150 ease-in-out">
              <td className="py-4 px-6  border-gray-100 text-gray-700">2</td>
              <td className="py-4 px-6  border-gray-100 text-gray-700">
                ناصر غلامی
              </td>
              <td className="py-4 px-6  border-gray-100 text-gray-700">
                09351684845
              </td>
              <td className="py-2 px-2  border-gray-100 text-gray-700">
                <span className="bg-red-300 text-xs font-medium  text-red-500 rounded-lg p-2">
                  غیرفعال
                </span>
              </td>
              <td>
                <VscEdit className="text-amber-600" />
              </td>
              <td>
                <VscTrash className="text-red-600" />
              </td>
            </tr>
          </tbody> */}
        </table>
      </div>
    </>
  );
}
