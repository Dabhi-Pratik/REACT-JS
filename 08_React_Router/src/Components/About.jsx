import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const About = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-light py-5">
                <Container>
                    <Row className="align-items-center">

                        <Col md={6}>
                            <h1 className="fw-bold mb-3">About Us</h1>

                            <p className="text-muted">
                                We are passionate about building modern,
                                responsive, and user-friendly websites using
                                the latest web technologies like React and
                                Bootstrap.
                            </p>

                            <p className="text-muted">
                                Our goal is to provide high-quality web
                                solutions that help businesses grow and deliver
                                the best experience to their users.
                            </p>

                            <Button variant="primary">
                                Learn More
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Why Choose Us */}
            <section className="py-5">
                <Container>
                    <h2 className="text-center mb-5">Why Choose Us?</h2>

                    <Row>
                        <Col md={4}>
                            <Card className="shadow-sm h-100 text-center">
                                <Card.Body>
                                    <h1>🚀</h1>
                                    <Card.Title>Fast Development</Card.Title>
                                    <Card.Text>
                                        We build fast, secure, and optimized web
                                        applications.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className="shadow-sm h-100 text-center">
                                <Card.Body>
                                    <h1>💡</h1>
                                    <Card.Title>Creative Design</Card.Title>
                                    <Card.Text>
                                        Beautiful UI/UX designs that engage your
                                        users.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className="shadow-sm h-100 text-center">
                                <Card.Body>
                                    <h1>🤝</h1>
                                    <Card.Title>Trusted Support</Card.Title>
                                    <Card.Text>
                                        We provide reliable support and regular
                                        updates for your projects.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Our Mission */}
            <section className="bg-primary text-white py-5">
                <Container className="text-center">
                    <h2>Our Mission</h2>

                    <p className="mt-3">
                        Our mission is to create innovative digital solutions
                        that empower businesses and individuals to achieve their
                        goals through technology.
                    </p>
                </Container>
            </section>

            {/* Statistics */}
            <section className="py-5">
                <Container>
                    <Row className="text-center">
                        <Col md={3} sm={6} className="mb-4">
                            <h1 className="text-primary">100+</h1>
                            <p>Projects Completed</p>
                        </Col>

                        <Col md={3} sm={6} className="mb-4">
                            <h1 className="text-primary">50+</h1>
                            <p>Happy Clients</p>
                        </Col>

                        <Col md={3} sm={6} className="mb-4">
                            <h1 className="text-primary">5+</h1>
                            <p>Years Experience</p>
                        </Col>

                        <Col md={3} sm={6} className="mb-4">
                            <h1 className="text-primary">24/7</h1>
                            <p>Support</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default About;