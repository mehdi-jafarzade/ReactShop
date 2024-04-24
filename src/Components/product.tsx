import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import BasicExample from "./cart";
import Layout from "./Layout";

interface UserData {
  name: string;
  cat: string;
  img: string;
  id: string;
  p1: string;
}

export default function Product() {
  const { id } = useParams();
  console.log(id);
  

  const [data, setData] = useState<UserData[]>([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/user/${id}`)
      .then((res) => {
        setData(res.data); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  return (
    <Layout>
      {
            <Container style={{marginTop: "100px"}}>
              <Row xs={1} sm={2}>
                <Col >
                <div className="text-center">
                <BasicExample item={data} />
                </div>
                </Col>

                <Col >
                <p>{data.p1}</p>
                </Col>
              </Row>
            </Container>    
      }
    </Layout>
  );
}

