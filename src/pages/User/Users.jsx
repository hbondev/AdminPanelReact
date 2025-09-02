import { useEffect, useState } from "react";
import Table from "../../components/Table.jsx";
import Adminapi from "../../utils/Services/userServices.js";

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

  const columns = [
    { key: "id", title: "شناسه" },
    { key: "name", title: "نام" },
    { key: "email", title: "ایمیل" },
    { key: "phonenumber", title: "شماره موبایل" },
    { key: "status", title: "وضعیت" },
    <button></button>,
  ];

  const data = user;

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">کاربران</h2>
      <Table columns={columns} data={data} />
    </div>
  );
}
