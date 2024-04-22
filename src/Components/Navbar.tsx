import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffcanvasExample() {
  
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={""} expand="md" className="bg-secondary  mb-3 d-flex justify-content-between vazir d-flex-column mb-4 position-fixed w-100 fixed-top">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas className="d-flex"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  فروشگاه تکنوسام
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body >
                <Nav variant="secondary" className="justify-content-end justify-content-md-around flex-grow-1 pe-3 d-flex">
                    <Nav.Link href="#action1" className='fs-5 lalezar'>صفحه اصلی</Nav.Link>
                  <NavDropdown className='vazir mt-md-1 mt-2'
                    title="محصولات"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">موبایل</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item  href="#action4">
                       لپ تاپ
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        لوازم جانبی
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        اخبار تکنولوژی 
                    </NavDropdown.Item>
                  </NavDropdown>
                <Form className="d-flex mt-3">
                  <Form.Control
                    type="search"
                    placeholder="جستجو ..."
                    className="me-3"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">جستجو</Button>
                </Form>
                </Nav>
            <Navbar.Brand className='lalezar fs-3 d-hidden d-md-flex' href="#">تکنوسام</Navbar.Brand>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
