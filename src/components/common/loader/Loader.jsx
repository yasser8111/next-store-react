import "./loader.css";

export default function Loader({ text = "جاري التحميل..." }) {
  return (
    <div className="loader">
      <div className="spinner"></div>
      <p className="loader-text">{text}</p>
    </div>
  );
}

