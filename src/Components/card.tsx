import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
interface ds {
    name: string;
    img: string;
    h1: string;
    id: string;
}
function BasicExample({item} : {item : ds}) {
  return (
    <Card className='vazir' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.h1}
        </Card.Text>
        <Link to={`/product/${item.id}`} style={{backgroundColor: "#bc4cf5" , textDecoration: "none", borderRadius: "3px"}} className='px-3 py-1 text-white' >خرید</Link>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;