import { useState } from "react";
import { BrowserRouter ,Routes,Route } from "react-router";

import "./App.css";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Products from "./pages/Store/Products";
import Orders from "./pages/Store/Orders";
import Reports from "./pages/Store/Reports";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard title="داشبورد" />} />  
        <Route path="/pages" element={<AdminLayout title="صفحه ها" />} />
        <Route path="/pages/create" element={<AdminLayout title="ایجاد صفحه" />} />
        <Route path="/pages/edit/:id" element={<AdminLayout title="ویرایش صفحه" />} />
        <Route path="/pages/delete/:id" element={<AdminLayout title="حذف صفحه" />} />
        <Route path="/pages/view/:id" element={<AdminLayout title="نمایش صفحه" />} />
        <Route path="/pages/list" element={<AdminLayout title="لیست صفحات" />} />
        <Route path="/pages/search" element={<AdminLayout title="جستجوی " />} />
        <Route path="/pages/filter" element={<AdminLayout title="فیلتر ها" />} />

        <Route path="/Store" element={<Products title="محصولات" />} />
        <Route path="/pages/create" element={<Orders title="سفارش ها "/>} />
        <Route path="/pages/edit/:id" element={<Reports title="گزارش ها "/>} />
    
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
