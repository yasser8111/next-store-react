import "./terms.css"; 
import { termsData } from "../../../context/TermsContext";

export default function TermsContent() {
  return (
    <div className="container">
        <h2 className="terms-title">الشروط والأحكام</h2>
      <section className="terms-section">
        <aside className="terms-sidebar">
          <nav>
            <h3>محتويات الصفحة</h3>
            <ul>
              {termsData.map(term => (
                <li key={term.id}>
                  <a href={`#${term.id}`}>{term.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      
        <div className="terms-content">
          {termsData.map(term => (
            <article key={term.id} id={term.id} className="terms-article">
              <h2>{term.title}</h2>
              <div className="article-content">
                <p>{term.description}</p>
      
                {term.items && (
                  <div className="terms-list">
                    {term.items.map((item, i) => (
                      <div className="term-item" key={i}>
                        <i className="fa-solid fa-circle-check"></i>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
      
                {term.note && (
                  <div className="notice-box">
                    <i className="fa-solid fa-lightbulb"></i>
                    <div>
                      <strong>ملاحظة:</strong>
                      <p>{term.note}</p>
                    </div>
                  </div>
                )}
      
                {term.table && (
                  <div className="pricing-table">
                    <div className="table-header">
                      <span>طريقة الدفع</span>
                      <span>الحالة</span>
                      <span>ملاحظات</span>
                    </div>
                    {term.table.map((row, i) => (
                      <div className="table-row" key={i}>
                        <span>{row.method}</span>
                        <span>{row.status}</span>
                        <span>{row.notes}</span>
                      </div>
                    ))}
                  </div>
                )}
      
                {term.shippingInfo && (
                  <div className="shipping-info">
                    <h4>معلومات الشحن:</h4>
                    <ul>
                      {term.shippingInfo.map((info, i) => (
                        <li key={i}>{info}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
