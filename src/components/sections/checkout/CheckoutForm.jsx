import "./checkout.css";
export default function CheckoutForm({
  userName,
  setUserName,
  userPhone,
  setUserPhone,
  userAddress,
  setUserAddress,
  area,
  setArea,
  otherLocation,
  setOtherLocation,
  details,
  setDetails,
  handleSubmit
}) {
  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>الاسم الكامل</label>
        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>رقم الهاتف</label>
        <input type="text" value={userPhone} onChange={(e) => setUserPhone(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>العنوان</label>
        <input type="text" value={userAddress} onChange={(e) => setUserAddress(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>المنطقة</label>
        <input type="text" value={area} onChange={(e) => setArea(e.target.value)} />
      </div>
      <div className="form-group">
        <label>موقع إضافي (إن وجد)</label>
        <input type="text" value={otherLocation} onChange={(e) => setOtherLocation(e.target.value)} />
      </div>
      <div className="form-group">
        <label>تفاصيل إضافية</label>
        <textarea value={details} onChange={(e) => setDetails(e.target.value)} />
      </div>
    </form>
  );
}
