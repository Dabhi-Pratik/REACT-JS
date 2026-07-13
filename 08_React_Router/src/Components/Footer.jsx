import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="bg-dark text-light pt-5 pb-3 mt-5">
            <Container>
                <Row>
                    {/* Company Info */}
                    <Col md={4} className="mb-4">
                        <h4>MyWebsite</h4>
                        <p>
                            We build modern, responsive, and user-friendly
                            websites using React and Bootstrap.
                        </p>
                    </Col>

                    {/* Quick Links */}
                    <Col md={4} className="mb-4">
                        <h4>Quick Links</h4>
                        <ul className="list-unstyled">
                            <li>
                                <a href="/" className="text-light text-decoration-none">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="text-light text-decoration-none">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/service" className="text-light text-decoration-none">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="/product" className="text-light text-decoration-none">
                                    Products
                                </a>
                            </li>
                        </ul>
                    </Col>

                    {/* Contact */}
                    <Col md={4} className="mb-4">
                        <h4>Contact Us</h4>
                        <p>📍 Bhavnagar, Gujarat</p>
                        <p>📧 info@example.com</p>
                        <p>📞 +91 98765 43210</p>
                    </Col>
                </Row>

                <hr className="border-secondary" />

                <div className="text-center">
                    <p className="mb-0">
                        © {new Date().getFullYear()} MyWebsite. All Rights Reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;