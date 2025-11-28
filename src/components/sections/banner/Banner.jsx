import "./banner.css";

export default function CustomBanner({
  title = "إذا لم تجد ما تبحث عنه…",
  subtitle = "صمم تيشيرتك الخاص الآن!",
  buttonText = "ابدأ التصميم",
  onButtonClick = () => {},
}) {
  return (
    <div className="container">
      <section className="banner">
        <div className="banner-content">
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <button className="btn" onClick={onButtonClick}>
            {buttonText}
          </button>
        </div>
      </section>
    </div>
  );
}
