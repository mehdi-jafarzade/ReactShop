import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
interface UserData {
  name: string;
  cat: string;
  img: string;
  id: string;
  p1: string;
  h1: string;
  price: string;
}
function BasicCard({item} : {item : UserData}) {
  return (
    <Card className='vazir' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text className='lalezar fs-5 text-danger'>
          <span className='text-black'>قیمت : </span>{item.price}
        </Card.Text>
        <Link to={`/product/${item.id}`} style={{backgroundColor: "#bc4cf5" , textDecoration: "none", borderRadius: "3px"}} className='px-3 py-1 text-white' >افزودن به سبد</Link>
      </Card.Body>
    </Card>
  );
}

export default BasicCard;