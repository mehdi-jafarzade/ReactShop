import { Button, Col, Container, Row } from "react-bootstrap";
import Layout from "./Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import BasicExample from "./cart";
interface UserData {
  name: string;
  cat: string;
  img: string;
  id: string;
  h1:string;
}

export default function Home() {
  const [data, setData] = useState<UserData[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3000/user")
      .then((res) => {
        setData(res.data); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col>
            <div
              style={{ marginTop: "71px" }}
              className="img-container h-75 position-relative overflow-hidden d-none d-md-flex"
            >
              <img className="w-100 h-55" src="/images/pic.jpg" alt="عکس" />
              <div className="img-overlay position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-50"></div>

              <form className="d-flex justify-content-center search-form position-absolute top-50 start-50 vazir translate-middle">
                <input
                  type="search"
                  placeholder="جستجو کنید..."
                  className="form-control px-4 border-2 border-warning"
                />
                <Button
                  className="border-2 border-warning ms-1"
                  variant="secondary"
                >
                  جستجو
                </Button>{" "}
              </form>
            </div>
          </Col>
        </Row>
        <Row className="vazir" xs={1} md={2}>
          <Col xs={{ order: 2 }}>
            <h2 className="mt-3">فروشگاه تکنوسام</h2>
            <p style={{ textAlign: "justify", direction: "rtl" }} className="mt-2">
              خرید آسان از تکنوسام, همراه با ضمانت بازگشت وجه و خرید اقساطی.
              تمامی محصولات با پست پیشتاز ارسال می شوند.شما مشتریان گرامی
              می‌توانید برای خرید اقساطی کالا مورد نظر خود در دسته بندی‌های
              مختلف نظیر گوشی موبایل، لپ تاپ، تلویزیون، لوازم خانگی و سایر
              کالاهای موجود در تکنوسام نسبت به ثبت نام در پلتفرم‌های همکار نظیر
              ازکی وام، ایزی پی و بالن و دریافت اعتبار یا شارژ کیف پول خود اقدام
              نمایید.پس از ثبت نام و دریافت اعتبار از پلتفرم‌های واسطه برای خرید
              قسطی از تکنوسام, وارد حساب کاربری خود در سایت تکنوسام شوید. کالا
              مورد نظر خود را انتخاب کرده و به سبد خرید خود اضافه کنید و فرایند
              خرید خود را نهایی کنید.
            </p>
          </Col>
          <Col xs={{ order: 1 }}>
            <img src="/images/pin.jpg" className="img-fluid mt-5" />
          </Col>
        </Row>
          <h3 className="vazir mt-5">
            جدیدترین محصولات:
          </h3>
        <Row className="d-flex justify-content-center" xs={1} sm={2} md={2} lg={3} xl={4}>
  {data
    .filter((item) => item.cat === "mobile")
    .slice(0, 4)
    .map((item) => (
      <Col key={item.name} className="mt-2 d-flex justify-content-center">
        <div className="text-center">
          <BasicExample item={item}/>
        </div>
      </Col>
    ))}
</Row>

<h3 className="vazir mt-5">
            جدیدترین محصولات:
          </h3>
        <Row className="d-flex justify-content-center" xs={1} sm={2} md={2} lg={3} xl={4}>
  {data
    .filter((item) => item.cat === "laptop")
    .slice(0, 4)
    .map((item) => (
      <Col key={item.name} className="mt-2 d-flex justify-content-center">
        <div className="text-center">
          <BasicExample item={item}/>
        </div>
      </Col>
    ))}
</Row>

<h3 className="vazir mt-5">
            جدیدترین محصولات:
          </h3>
        <Row className="d-flex justify-content-center" xs={1} sm={2} md={2} lg={3} xl={4}>
  {data
    .filter((item) => item.cat === "mobiletool")
    .slice(0, 4)
    .map((item) => (
      <Col key={item.name} className="mt-2 d-flex justify-content-center">
        <div className="text-center">
          <BasicExample item={item}/>
        </div>
      </Col>
    ))}
</Row>

<h3 className="vazir mt-5">
            جدیدترین محصولات:
          </h3>
        <Row className="d-flex justify-content-center" xs={1} sm={2} md={2} lg={3} xl={4}>
  {data
    .filter((item) => item.cat === "computer")
    .slice(0, 4)
    .map((item) => (
      <Col key={item.name} className="mt-2 d-flex justify-content-center">
        <div className="text-center">
          <BasicExample item={item}/>
        </div>
      </Col>
    ))}
</Row>

      </Container>
    </Layout>
  );
}
