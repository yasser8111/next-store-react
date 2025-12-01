import "./cart.css";

export default function CartSummary({ items }) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const currency = items.length > 0 ? items[0].currency : "YER";

  const discountEligible = total >= 35000;
  const discount = discountEligible ? total * 0.10 : 0;
  const finalTotal = total - discount;

  return (
    <div className="cart-summary">
      <h2>ملخص السلة</h2>

      <div className="summary-details">
        <p>عدد المنتجات: <span>{items.length}</span></p>

        <p>
          الإجمالي: <span>{total} {currency}</span>
        </p>

        {discountEligible && (
          <p className="discount">
            خصم 10%: <span>-{discount} {currency}</span>
          </p>
        )}

        <p className="final-total">
          المجموع النهائي: <span>{finalTotal} {currency}</span>
        </p>
      </div>

      <button className="checkout-btn">إتمام الطلب</button>
    </div>
  );
}
