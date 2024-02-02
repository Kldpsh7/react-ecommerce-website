import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";

const Products = () => {

    const productsArr = [
        {
            title: 'Colors',        
            price: 100,        
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',        
        },        
        {        
            title: 'Black and white Colors',        
            price: 50,        
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',        
        },        
        {        
            title: 'Yellow and Black Colors',        
            price: 70,        
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',        
        },        
        {        
            title: 'Blue Color',        
            price: 100,        
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',        
        }
    ]

    return <Container>
            <Row xs={1} md={3} className="g-4">
                {productsArr.map(prod=><Col key={Math.random()}>
                    <ProductCard title={prod.title} price={prod.price} image={prod.imageUrl} />
                </Col>)}
        </Row>
    </Container>
};

export default Products;