import { Outlet } from "react-router";
import AdminLayout from "./AdminLayout";
import Footer from "./footer/footer";
import Header from "./header/Header";

export default function Main({ title }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* بخش اصلی */}
      <div className="flex flex-1">
        {/* سایدبار */}
        <Header />

        {/* محتوای اصلی */}
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>

      {/* فوتر */}
      <Footer />
    </div>
  );
}
