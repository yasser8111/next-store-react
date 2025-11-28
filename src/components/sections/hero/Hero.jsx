import "./hero.css";
import {
  DISCOUNT_MIN_AMOUNT,
  DISCOUNT_PERCENT,
} from "../../../utils/constants";

export default function Hero() {
  return (
    <section className="hero home-page">
      <div className="hero-content container">
        <h1>مرحبا بك في متجر نكست</h1>
        <p>
          اشترِ أكثر من {DISCOUNT_MIN_AMOUNT} ريال لتحصل على خصم{" "}
          {DISCOUNT_PERCENT}٪ على مشترياتك
        </p>
        <button className="btn">تسوق الآن</button>
      </div>
    </section>
  );
}
