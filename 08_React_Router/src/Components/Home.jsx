import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-primary text-white py-5">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h1 className="display-4 fw-bold">
                                Welcome to My Website
                            </h1>
                            <p className="lead mt-3">
                                Build beautiful and responsive websites using
                                React and Bootstrap.
                            </p>

                            <Button variant="light" size="lg">
                                Get Started
                            </Button>
                        </Col>

                        <Col md={6} className="text-center mt-4 mt-md-0">
                            <img
                                src="https://via.placeholder.com/500x350"
                                alt="Hero"
                                className="img-fluid rounded"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Features */}
            <section className="py-5">
                <Container>
                    <h2 className="text-center mb-5">Our Features</h2>

                    <Row>
                        <Col md={4}>
                            <Card className="shadow-sm h-100">
                                <Card.Body className="text-center">
                                    <Card.Title>Fast</Card.Title>
                                    <Card.Text>
                                        High performance and optimized
                                        applications.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className="shadow-sm h-100">
                                <Card.Body className="text-center">
                                    <Card.Title>Responsive</Card.Title>
                                    <Card.Text>
                                        Looks great on mobile, tablet, and
                                        desktop.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className="shadow-sm h-100">
                                <Card.Body className="text-center">
                                    <Card.Title>Modern Design</Card.Title>
                                    <Card.Text>
                                        Clean UI with the latest Bootstrap
                                        components.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Services */}
            <section className="bg-light py-5">
                <Container>
                    <h2 className="text-center mb-5">Our Services</h2>

                    <Row>
                        <Col md={4}>
                            <Card className="shadow-sm">
                                <Card.Body>
                                    <Card.Title>Web Development</Card.Title>
                                    <Card.Text>
                                        Create responsive and dynamic websites.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className="shadow-sm">
                                <Card.Body>
                                    <Card.Title>UI/UX Design</Card.Title>
                                    <Card.Text>
                                        Beautiful and user-friendly interfaces.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className="shadow-sm">
                                <Card.Body>
                                    <Card.Title>React Applications</Card.Title>
                                    <Card.Text>
                                        Build scalable React.js projects with
                                        Bootstrap.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Call To Action */}
            <section className="py-5 text-center">
                <Container>
                    <h2>Ready to Start Your Project?</h2>
                    <p className="mb-4">
                        Let's build something amazing together.
                    </p>

                    <Button variant="primary" size="lg">
                        Contact Us
                    </Button>
                </Container>
            </section>
        </>
    );
};

export default Home;