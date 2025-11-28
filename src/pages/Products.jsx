import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer"
import ProductsGrid from "../components/products/productsgrid/ProductsGrid"

export default function Products() {
  return (
    <>
      <Header />
      <ProductsGrid showSearch={true} />
      <Footer />
    </>
  );
}
