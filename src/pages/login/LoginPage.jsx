import React from "react";
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";
import "./login.css";

export default function LoginPage() {
  return (
    <>
      <Header />
      <div className="login-container">
        <div className="login-card">
          <h1>تسجيل الدخول</h1>
          <form className="login-form">
            <div className="form-group">
              <label>البريد الإلكتروني</label>
              <input type="email" placeholder="example@gmail.com" />
            </div>
            <div className="form-group">
              <label>كلمة المرور</label>
              <input type="password" placeholder="********" />
            </div>
            <button type="submit" className="login-btn">تسجيل الدخول</button>
          </form>
          <p className="signup-link">
            ليس لديك حساب؟ <a href="/register">إنشاء حساب</a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
