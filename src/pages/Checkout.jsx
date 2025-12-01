import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
import CheckoutForm from "../components/sections/checkout/CheckoutForm";
import OrderSummary from "../components/sections/checkout/OrderSummary";

export default function CheckoutPage({ cartItems: propCartItems }) {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState(propCartItems || []);
  const [loading, setLoading] = useState(true);

  // بيانات المستخدم
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [area, setArea] = useState("");
  const [otherLocation, setOtherLocation] = useState("");
  const [details, setDetails] = useState("");

  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    // جلب السلة من props أو localStorage
    if (propCartItems && propCartItems.length > 0) {
      setCartItems(propCartItems);
    } else {
      const stored = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(stored);
    }
    setLoading(false);
  }, [propCartItems]);

  const totalAmount = cartItems.reduce((sum, it) => sum + it.price * it.quantity, 0);
  const currency = cartItems.length > 0 ? cartItems[0].currency : "YER";

  // إرسال الطلب
  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    if (!cartItems.length) {
      alert("سلتك فارغة، لا يمكن إرسال الطلب.");
      return;
    }
    if (!userName.trim() || !userPhone.trim() || !userAddress.trim() || !area.trim()) {
      alert("يرجى تعبئة جميع حقول الاسم، الهاتف، العنوان، والمنطقة.");
      return;
    }

    setSubmitting(true);

    const order = {
      userName: userName.trim(),
      userPhone: userPhone.trim(),
      userAddress: userAddress.trim(),
      location: { area, other: otherLocation || "", details: details || "" },
      items: cartItems.map(item => ({
        productId: item.id,
        name: item.name,
        quantity: item.quantity,
        selectedSize: item.selectedSize,
        price: item.price,
        currency: item.currency,
      })),
      totalAmount,
      currency,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    try {
      console.log("Order object:", order);
      localStorage.removeItem("cart");
      setCartItems([]);
      setSubmitting(false);
      alert("تم تقديم الطلب بنجاح! سيتم التواصل معك قريبًا.");
      navigate("/");
    } catch (err) {
      console.error(err);
      setSubmitting(false);
      alert("حصل خطأ أثناء تقديم الطلب. حاول مرة أخرى.");
    }
  };

  if (loading) return null;

  return (
    <>
      <Header />
      <div className="checkout container">
        <h1 className="checkout-title">إتمام الطلب</h1>
        <div className="checkout-content">
          <CheckoutForm
            userName={userName} setUserName={setUserName}
            userPhone={userPhone} setUserPhone={setUserPhone}
            userAddress={userAddress} setUserAddress={setUserAddress}
            area={area} setArea={setArea}
            otherLocation={otherLocation} setOtherLocation={setOtherLocation}
            details={details} setDetails={setDetails}
            handleSubmit={handleSubmit}
          />
          <OrderSummary cartItems={cartItems} />
        </div>
      </div>
      <Footer />
    </>
  );
}
