import "./specs.css";

export default function ProductSpecs({ specs }) {
  if (!specs || Object.keys(specs).length === 0) return null;

  return (
    <div className="product-specs">
      <h2>المواصفات</h2>
      <ul>
        {Object.entries(specs).map(([key, value], i) => (
          <li key={i}>
            <span className="spec-key">{key}:</span>
            <span className="spec-value">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
