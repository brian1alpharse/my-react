import { Header, PrivateRoute } from "./Components/Atoms";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { DetailProduct, Home, AllProduct } from "./Pages";

function App() {
  return (
    <BrowserRouter>
      <div className="fixed z-10 top-0 left-0 w-full h-[10%] px-[10%] bg-blue-50">
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProduct />} />
        <Route path="/products/terlaris" element={<AllProduct />} />
        <Route path="/products/favorit" element={<AllProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
