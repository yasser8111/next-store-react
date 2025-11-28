import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./styles/globals.css";
import Loader from "./components/common/loader/Loader";

// Lazy loading for pages
const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const Cart = lazy(() => import("./pages/Cart"));
const About = lazy(() => import("./pages/About"));
const Terms = lazy(() => import("./pages/Terms"));
const Custom = lazy(() => import("./pages/Custom"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"))

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader text="جارِ تحميل الصفحة..." />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/custom" element={<Custom />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
