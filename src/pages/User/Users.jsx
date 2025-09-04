import { useEffect, useState } from "react";
import Table from "../../components/Table.jsx";
import Adminapi from "../../utils/Services/userServices.js";
import { Link } from "react-router-dom";

export default function Users() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Adminapi.get("/users")
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>در حال بارگذاری...</p>;

  const handleDelete = (id) => {
    if (
      window.confirm(`آیا مطمئن هستید که می‌خواهید کاربر ${id} را حذف کنید؟`)
    ) {
      Adminapi.delete(`/users/${id}`)
        .then(() => {
          setPost((prev) => prev.filter((post) => post.id !== id));
        })
        .catch((err) => {
          console.error("Error deleting post:", err);
          alert("حذف با خطا مواجه شد.");
        });
    }
  };

  const columns = [
    { key: "id", title: "نام کاربری" },
    { key: "name", title: "نام و نام خانوادگی" },
    { key: "email", title: "ایمیل" },
    { key: "phonenumber", title: "شماره موبایل" },
    { key: "status", title: "وضعیت" },
    {
      key: "actions",
      title: "عملیات",
      render: (row) => (
        <div className="flex gap-2">
          <Link
            to={`${row.id}`} // 👈 مسیر نسبی به زیرروت
            className="px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            ویرایش
          </Link>
          <button
            onClick={() => handleDelete(row.id)}
            className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            حذف
          </button>
        </div>
      ),
    },
  ];

  const data = user;

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">کاربران</h2>
      <Table columns={columns} data={data} />
    </div>
  );
}
