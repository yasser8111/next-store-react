import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../config/firebase";
import ProductCard from "../productcard/ProductCard";
import Loader from "../../common/loader/Loader";
import "./products.css";

export default function ProductsGrid({ showSearch = false }) {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("none");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      const querySnapshot = await getDocs(collection(db, "products"));
      const productsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProducts(productsData);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <Loader text="جاري تحميل المنتجات..." />;
  }

  const filteredProducts = products
    .filter((product) =>
      product.name?.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "low-to-high") return a.price - b.price;
      if (sortOrder === "high-to-low") return b.price - a.price;
      return 0;
    });

  return (
    <section className="products" id="products">
      <div className="container">
        <div className="container-sm">
          <h2 className="products-title">جميع التشيرتات</h2>

          {showSearch && (
            <div className="search-sort-wrapper">
              <input
                type="text"
                placeholder="ابحث عن منتج..."
                className="search-bar"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <select
                className="sort-select"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="none">الترتيب الافتراضي</option>
                <option value="low-to-high">السعر: من الاقل للأعلى</option>
                <option value="high-to-low">السعر: من الأعلى للاقل</option>
              </select>
            </div>
          )}
        </div>

        <div className="products-grid">
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
