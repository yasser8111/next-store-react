import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

import "./productdetails.css";

import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";
import Loader from "../../components/common/loader/Loader";

import ProductGallery from "../../components/products/productgallery/ProductGallery";
import ProductInfo from "../../components/products/productinfo/ProductInfo";
import ProductSpecs from "../../components/products/productspecs/ProductSpecs";
import ProductsGrid from "../../components/products/productsgrid/ProductsGrid"

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) setProduct(docSnap.data());
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
        <div className="product-detail-layout">
          <ProductGallery
            mainImage={product.mainImage}
            hoverImage={product.hoverImage}
            galleryImages={product.gallery}
          />
          <ProductInfo product={product} />
        </div>

        <div className="product-specs">
          <ProductSpecs specs={product.specs} />
        </div>

      </div>
        <ProductsGrid />

      <Footer />
    </>
  );
}
