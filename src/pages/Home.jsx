import { useNavigate } from "react-router-dom";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
import Hero from "../components/sections/hero/Hero";
import ProductsGrid from "../components/products/productsgrid/ProductsGrid";
import Bunner from "../components/sections/banner/Banner";

export default function Home() {
  const nav = useNavigate();
  return (
    <>
      <div className="home-page">
        <Header />
        <Hero />
        <ProductsGrid />
        <Bunner onButtonClick={() => nav("/custom")} />
        <Footer />
      </div>
    </>
  );
}
