import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: "$99",
        // image: "https://via.placeholder.com/300x200",
        description: "High-quality sound with noise cancellation."
    },
    {
        id: 2,
        name: "Smart Watch",
        price: "$149",
        // image: "https://via.placeholder.com/300x200",
        description: "Track your fitness and stay connected."
    },
    {
        id: 3,
        name: "Laptop",
        price: "$899",
        // image: "https://via.placeholder.com/300x200",
        description: "Powerful performance for work and gaming."
    },
    {
        id: 4,
        name: "Bluetooth Speaker",
        price: "$59",
        // image: "https://via.placeholder.com/300x200",
        description: "Portable speaker with amazing sound quality."
    },
    {
        id: 5,
        name: "Gaming Mouse",
        price: "$39",
        // image: "https://via.placeholder.com/300x200",
        description: "Ergonomic design with RGB lighting."
    },
    {
        id: 6,
        name: "Keyboard",
        price: "$49",
        // image: "https://via.placeholder.com/300x200",
        description: "Mechanical keyboard for fast typing."
    }
];

const Product = () => {
    return (
        <Container className="py-5 text-center">
            <h1 className="text-center mb-5">Our Products</h1>

            <Row>
                {products.map((product) => (
                    <Col md={4} sm={6} className="mb-4" key={product.id}>
                        <Card className="h-100 shadow-sm">
                            <Card.Img variant="top" src={product.image} />

                            <Card.Body className="d-flex flex-column">
                                <Card.Title>{product.name}</Card.Title>

                                <Card.Text>{product.description}</Card.Text>

                                <h4 className="text-primary">{product.price}</h4>

                                <Button variant="primary" className="mt-auto">
                                    Buy Now
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Product;