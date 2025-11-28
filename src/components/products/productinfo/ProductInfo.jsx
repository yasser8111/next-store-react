import "./info.css";

export default function ProductInfo({ product }) {
  const availableSizes = Object.keys(product.sizes || {}).filter(
    (size) => product.sizes[size] > 0
  );

  return (
    <div className="product-info">
      <h1 className="product-name">{product.name}</h1>

      <div className="product-prices">
        <span className="price">{product.price} {product.currency}</span>
        {product.oldPrice && (
          <span className="old-price">{product.oldPrice} {product.currency}</span>
        )}
      </div>

      <p className="product-description">{product.description}</p>

      {availableSizes.length > 0 && (
        <div className="product-sizes">
          <h3>المقاسات المتوفرة:</h3>
          <div className="sizes-list">
            {availableSizes.map((size) => (
              <span key={size} className="size-item">{size}</span>
            ))}
          </div>
        </div>
      )}

      <div className="product-actions">
        <button className="btn primary">أضف إلى السلة</button>
        <button className="btn outline">شراء الآن</button>
        {product.whatsapp && (
          <a
            href={`https://wa.me/967${product.whatsapp}?text=اريد طلب ${product.name}`}
            className="btn whatsapp"
          >
            تواصل واتساب
          </a>
        )}
      </div>
    </div>
  );
}
