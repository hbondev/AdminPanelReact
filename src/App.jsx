import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Main from "./layouts/Main";
import Products from "./pages/Store/Products";
import Userslist from "./pages/Users/Userslist";
import Postlist from "./pages/Blog/Postlist";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main title="داشبورد" />}>
            <Route path="/products" element={<Products title="فروشگاه" />} />
            <Route path="/users" element={<Userslist title="کاربران" />} />
            <Route path="/blog" element={<Postlist title="وبلاگ" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
