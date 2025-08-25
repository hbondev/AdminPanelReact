import { useState } from "react";

import "./App.css";
import AdminLayout from "./layouts/AdminLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AdminLayout />
    </>
  );
}

export default App;
