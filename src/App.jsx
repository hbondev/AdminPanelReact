import { BrowserRouter, Routes, Route } from "react-router"; // تغییر: react-router -> react-router-dom
import "./App.css";
import Main from "./layouts/Main";
import Products from "./pages/Store/Products";
import Userslist from "./pages/Users/Userslist";
import Postlist from "./pages/Blog/Postlist";
import Adduser from "./pages/Users/Adduser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main title="داشبورد" />}>
          {/* صفحه اصلی (میزکار) */}
          <Route index element={<div>میز کار (داشبورد)</div>} />

          {/* صفحات فرزند */}
          <Route path="/products" element={<Products title="فروشگاه" />} />
          <Route path="/users" element={<Userslist title="کاربران" />} />
          <Route path="/users/add" element={<Adduser title="افزودن کاربر" />} />

          <Route path="/blog" element={<Postlist title="وبلاگ" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
