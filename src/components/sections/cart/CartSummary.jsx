import "./cart.css";

export default function CartSummary({ items }) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-summary">
      <h2>ملخص السلة</h2>
      <p>عدد المنتجات: {items.length}</p>
      <p>الإجمالي الكلي: {total} ريال</p>
      <button className="checkout-btn">إتمام الطلب</button>
    </div>
  );
}
