import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <Container
            className="d-flex flex-column justify-content-center align-items-center text-center"
            style={{ minHeight: "80vh" }}
        >
            <h1 className="display-1 fw-bold text-danger">404</h1>

            <h2 className="mb-3">Oops! Page Not Found</h2>

            <p className="text-muted mb-4">
                The page you are looking for doesn't exist or has been moved.
            </p>

            <Link to="/">
                <Button variant="primary">
                    Go Back Home
                </Button>
            </Link>
        </Container>
    );
};

export default ErrorPage;