import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "./Layout";
import axios from "axios";
import BasicEx from "./cardf";

interface UserData {
  name: string;
  cat: string;
  img: string;
  id: string;
  h1: string;
  price : string;
}

const ITEMS_PER_PAGE = 6;

export default function Mobile() {
  const [data, setData] = useState<UserData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/user");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = currentPage * ITEMS_PER_PAGE;

  return (
    <Layout>
      <Container fluid>
        <h3 className="vazir" style={{ marginTop: "85px" }}>
          فروشگاه تکنوسام :
        </h3>
        <Row className="d-flex justify-content-center" xs={1} sm={2} md={2} lg={3} xl={4}>
          {data
            .filter((item) => item.cat === "mobile")
            .slice(startIndex, endIndex) 
            .map((item) => (
              <Col key={item.id} className="mt-2 d-flex justify-content-center">
                <div className="text-center">
                  <BasicEx item={item}/>
                </div>
              </Col>
            ))}
        </Row>
        <div className="d-flex justify-content-center mt-4">
          <button style={{backgroundColor: "#bc4cf5" , textDecoration: "none", borderRadius: "3px"}} className="vazir px-3 py-1 text-white" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
             صفحه قبلی
          </button>
          <button style={{backgroundColor: "#bc4cf5" , textDecoration: "none", borderRadius: "3px"}} className="vazir px-3 py-1 ms-2 text-white" onClick={() => setCurrentPage(currentPage + 1)} disabled={endIndex >= data.length}>
             صفحه بعدی
          </button>
        </div>
      </Container>
    </Layout>
  );
}
