// src/pages/Blog.jsx

import { useEffect, useState } from "react";
import Adminapi from "../utils/Services/userServices.js";
import Table from "../components/Table.jsx";
import { Link, Outlet } from "react-router-dom"; // 👈 Outlet اضافه شد
import Details from "./User/Details.jsx";

export default function Blog() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Adminapi.get("/posts")
      .then((res) => {
        setPost(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>در حال بارگذاری...</p>;

  const handleDelete = (id) => {
    if (window.confirm(`آیا مطمئن هستید که می‌خواهید پست ${id} را حذف کنید؟`)) {
      Adminapi.delete(`/posts/${id}`)
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
    { key: "id", title: "شناسه" },
    { key: "title", title: "عنوان" },
    { key: "createdAt", title: "تاریخ انتشار" },
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

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">پست های وبلاگی</h2>
      <Table columns={columns} data={post} />
    </div>
  );
}
