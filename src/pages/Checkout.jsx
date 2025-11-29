import { useState } from "react";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
import CheckoutForm from "../components/sections/checkout/CheckoutForm";
// import OrderSummary from "../components/sections/checkout/OrderSummary";

export default function CheckoutPage({ cartItems }) {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [area, setArea] = useState("");
  const [otherLocation, setOtherLocation] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      userName,
      userPhone,
      userAddress,
      location: { area, other: otherLocation, details },
      items: cartItems.map((item) => ({
        productId: item.id,
        name: item.name,
        quantity: item.quantity,
        selectedSize: item.selectedSize,
        price: item.price,
      })),
      totalAmount: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      currency: "YER",
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    console.log("Order submitted:", order);
    alert("تم تقديم الطلب بنجاح!");
  };

  return (
    <>
      <Header />
      <div className="checkout-container">
        <h1>إتمام الطلب</h1>
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
          {/* <OrderSummary cartItems={cartItems} /> */}
        </div>
        <button type="submit" className="checkout-btn" onClick={handleSubmit}>تأكيد الطلب</button>
      </div>
      <Footer />
    </>
  );
}
