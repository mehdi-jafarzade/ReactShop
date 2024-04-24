import React from 'react';
import Card from 'react-bootstrap/Card';
import { UserData } from '../type';

interface BasicCardProps {
  item: UserData;
  handler: () => void; // Change handler type to match the new signature
}

const BasicCard: React.FC<BasicCardProps> = ({ item, handler }) => {
  return (
    <Card className='vazir' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text className='lalezar fs-5 text-danger'>
          <span className='text-black'>قیمت : </span>{item.price}
        </Card.Text>
        {/* Ensure handler is triggered on button click */}
        <button onClick={handler} style={{backgroundColor: "#bc4cf5" , textDecoration: "none", borderRadius: "3px"}} className='px-3 py-1 text-white' >افزودن به سبد</button>
      </Card.Body>
    </Card>
  );
}

export default BasicCard;
