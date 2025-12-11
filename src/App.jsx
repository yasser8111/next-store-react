import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./styles/globals.css";
import Loader from "./components/common/loader/Loader";
import { CartProvider } from "./context/CartContext";

// Lazy loading pages
const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const Cart = lazy(() => import("./pages/Cart"));
const About = lazy(() => import("./pages/About"));
const Terms = lazy(() => import("./pages/Terms"));
const Custom = lazy(() => import("./pages/Custom"));
const ProductDetails = lazy(() => import("./pages/product-details/ProductDetails"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Login = lazy(() => import("./pages/login/LoginPage"));

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Suspense fallback={<Loader text="جارِ تحميل الصفحة..." />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/custom" element={<Custom />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </CartProvider>
    </BrowserRouter>
  );
}
