import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer"
import Hero from "../components/sections/hero/Hero"
import ProductsGrid from "../components/products/productsgrid/ProductsGrid"
import Bunner from "../components/sections/banner/Banner"

export default function Home() {
  return (
    <>
      <div className="home-page">
        <Header />
        <Hero />
        <ProductsGrid />
        <Bunner />
        <Footer />
      </div>
    </>
  );
}