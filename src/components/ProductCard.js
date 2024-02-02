import { Card,Button } from "react-bootstrap";

const ProductCard = props=>{
    return <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.image} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>{props.price}</Card.Text>
      <Button variant="primary">Add to Cart</Button>
    </Card.Body>
  </Card>
};

export default ProductCard;