import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const services = [
    {
        id: 1,
        title: "Web Development",
        description:
            "We build fast, responsive, and modern websites using the latest technologies.",
        icon: "🌐",
    },
    {
        id: 2,
        title: "UI/UX Design",
        description:
            "Create attractive, user-friendly, and responsive interfaces for your business.",
        icon: "🎨",
    },
    {
        id: 3,
        title: "React Development",
        description:
            "Develop scalable and dynamic web applications using React.js.",
        icon: "⚛️",
    },
    {
        id: 4,
        title: "E-Commerce",
        description:
            "Build secure online stores with shopping carts and payment integration.",
        icon: "🛒",
    },
    {
        id: 5,
        title: "SEO Optimization",
        description:
            "Improve your website's ranking and reach more customers through SEO.",
        icon: "📈",
    },
    {
        id: 6,
        title: "Technical Support",
        description:
            "24/7 maintenance and technical support to keep your website running smoothly.",
        icon: "🛠️",
    },
];

const Service = () => {
    return (
        <Container className="py-5">
            {/* Page Heading */}
            <div className="text-center mb-5">
                <h1 className="fw-bold">Our Services</h1>
                <p className="text-muted">
                    We provide high-quality digital solutions to help your business grow.
                </p>
            </div>

            {/* Service Cards */}
            <Row>
                {services.map((service) => (
                    <Col md={4} sm={6} className="mb-4" key={service.id}>
                        <Card className="h-100 shadow-sm text-center">
                            <Card.Body>
                                <div style={{ fontSize: "50px" }}>{service.icon}</div>

                                <Card.Title className="mt-3">
                                    {service.title}
                                </Card.Title>

                                <Card.Text>{service.description}</Card.Text>

                                <Button variant="primary">
                                    Learn More
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Call to Action */}
            <div className="text-center mt-5">
                <h2>Need a Custom Solution?</h2>
                <p className="text-muted">
                    Contact us today and let's build something amazing together.
                </p>

                <Button variant="success" size="lg">
                    Contact Us
                </Button>
            </div>
        </Container>
    );
};

export default Service;