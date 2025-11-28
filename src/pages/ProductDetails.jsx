import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
import Loader from "../components/common/loader/Loader";
import ProductGallery from "../components/products/productGallery/ProductGallery";
import ProductInfo from "../components/products/productInfo/ProductInfo";
import ProductSpecs from "../components/products/productSpecs/ProductSpecs";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct(docSnap.data());
      }
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  if (loading) return <Loader text="جاري تحميل تفاصيل المنتج..." />;
  if (!product) return <p>هذا المنتج غير موجود</p>;

  return (
    <>
      <Header />
      <div className="container">
        <ProductGallery
          mainImage={product.mainImage}
          hoverImage={product.hoverImage}
          galleryImages={product.galleryImages}
        />
        <ProductInfo product={product} />
        <ProductSpecs specs={product.specs} />
      </div>
      <Footer />
    </>
  );
}
