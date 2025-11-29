import "./checkout.css";
export default function OrderSummary({ cartItems }) {
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="order-summary">
      <h2>ملخص الطلب</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="order-item">
          <span>{item.name} ({item.selectedSize}) x {item.quantity}</span>
          <span>{item.price * item.quantity} ريال</span>
        </div>
      ))}
      <div className="order-total">
        <strong>الإجمالي: </strong>
        <span>{totalAmount} ريال</span>
      </div>
    </div>
  );
}
