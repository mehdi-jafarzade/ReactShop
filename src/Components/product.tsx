import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import BasicCard from "./cardproduct";
import Layout from "./Layout";
import Formcomment from "./formcomment";

interface UserData {
  name: string;
  cat: string;
  img: string;
  id: string;
  p1: string;
  h1: string;
  price: string;
}

export default function Product() {
  const { id } = useParams();
  const [data, setData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/user/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        
        setError("Error fetching data");
        setLoading(false);
      });
  }, [id]);

  return (
    <Layout>
      <Container className="vazir" style={{ marginTop: "100px" }}>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {data && (
          <>
            <Row className="d-flex justify-content-center" xs={1} md={2}>
              <Col>
                <div className="text-center d-flex justify-content-center">
                  <BasicCard item={data} />
                </div>
              </Col>

              <Col>
                <h2 className="mb-4 mt-5">توضیحات محصول:</h2>
                <h5>{data.h1}:</h5>
                <p style={{ textAlign: "justify" }}>{data.p1}</p>
              </Col>
            </Row>
            <Row>
              <Formcomment />
            </Row>
          </>
        )}
      </Container>
    </Layout>
  );
}
