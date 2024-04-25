import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
interface ds {
    name: string;
    img: string;
    h1: string;
    id: string;
    price: string;
}
function BasicEx({item} : {item : ds}) {
  return (
    <Card className='vazir' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text className='lalezar fs-5 text-danger'>
          <span className='text-black'>قیمت : </span>{item.price}
        </Card.Text>
        <Link to={`/product/${item.id}`} style={{backgroundColor: "#bc4cf5" , textDecoration: "none", borderRadius: "3px"}} className='px-3 py-1 text-white' >خرید</Link>
      </Card.Body>
    </Card>
  );
}

export default BasicEx;