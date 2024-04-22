import { Button, Col, Container, Row } from "react-bootstrap";
import Layout from "./Layout";

export default function Home() {
  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col>
            <div style={{marginTop: "71px"}} className="img-container h-75 position-relative overflow-hidden d-none d-md-flex">
              <img
                className="w-100 h-55"
                src="/images/pic.jpg"
                alt="عکس"
              />
              <div className="img-overlay position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-50"></div>
              
              
              <form className="d-flex justify-content-center search-form position-absolute top-50 start-50 vazir translate-middle">
                <input type="search" placeholder="سرچ کنید..." className="form-control px-4" />
                <Button variant="secondary">جستجو</Button>{' '}
              </form>
             
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
