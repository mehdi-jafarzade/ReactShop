import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import BasicCard from "./cardproduct";
import Layout from "./Layout";
import Formcomment from "./formcomment";
import { UserData } from "../type";
import Store from "./context";

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const [data, setData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<UserData>(`http://localhost:3000/user/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
        setLoading(false);
      });
  }, [id]);

  const addToCartHandler = () => {
    if (data) {
      const existingItem = cart.cartItems.find((item) => item.id.toString() === data.id);
      const qty = existingItem ? (typeof existingItem.qty === 'number' ? existingItem.qty + 1 : 1) : 1;
      const payload = { ...data, qty, id: parseInt(data.id) };
      dispatch({ type: "ADD_TO_CART", payload });
    }
  }
  

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
                  <BasicCard item={data} handler={addToCartHandler} />
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