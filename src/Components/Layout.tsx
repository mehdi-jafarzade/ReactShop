import OffcanvasExample from "./Navbar";
import "./footer.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <OffcanvasExample />
      </header>
      <main>{children}</main>
      <footer className="vazir">
        <div className="main">
          <div className="logo row">
            <div className="footer-header">

              <h2>خدمات</h2>
            </div>
            <div className="logo-des">
              <p>
              تکنوسام فعالیت خود را از سال 1389 آغاز کرده است و تاکنون با اشتیاق و علاقه بالا آماده خدمت‌رسانی به مشتریانش است. برای اطلاعات بیشتر درباره‌ی نحوه شکل‌گیری تکنوسام می‌توانید به صفحه تاریخچه فعالیت تکنوسام مراجعه کنید.
              </p>
            </div>
          </div>

          <div className="office row">
            <div className="footer-header">
              <h3>پشتیبانی</h3>
            </div>
            <div className="office-des">
              <p>
               پشتیبانی فروشگاه اینترنتی تکنوسام
              </p>
              <a href="mailto:manikmaity.haker2003@gmail.com">
                mehgdijafarazade848@gmail.com
              </a>
              <p className="num">9865214999+</p>
            </div>
          </div>

          <div className="link row">
            <div className="footer-header">
              <h3>محصولات</h3>
            </div>
            <div className="link-des">
              <a href="#" className="footer-links">
                صفحه اصلی
              </a>
              <a href="#" className="footer-links">
                موبایل
              </a>
              <a href="#" className="footer-links">
                لپ تاپ
              </a>
              <a href="#" className="footer-links">
                لوازم جانبی موبایل
              </a>
              <a href="#" className="footer-links">
                لوازم جانبی کامپیوتر
              </a>
            </div>
          </div>

          <div className="newsletter row">
            <div className="footer-header">
              <h3>خبرنامه</h3>
            </div>
            <div className="newsletter-des">
              <div className="subscribe">
                <form>

                <input
                  type="email"
                  placeholder="Enter Email ID"
                  required
                  className="border rouanded-sm px-1 py-1"
                />
                <button className="px-4 py-1 btn-know">ارسال</button>
                </form>

              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <hr />
          <p>© حقوق این وب سایت برای تکنوسام محفوظ می باشد.</p>
        </div>
      </footer>
    </div>
  );
}
