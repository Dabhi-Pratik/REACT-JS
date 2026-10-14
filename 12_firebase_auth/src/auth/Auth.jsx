import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Alert,
} from "react-bootstrap";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { auth, googleProvider } from "../config/firebase";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [authData, setAuthData] = useState({
    email: "",
    password: "",
  });

  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (field, e) => {
    setAuthData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  // Email Login and Signup
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      let result;

      if (isLogin) {
        result = await signInWithEmailAndPassword(
          auth,
          authData.email,
          authData.password,
        );

        setSuccess("Login successful!");
      } else {
        result = await createUserWithEmailAndPassword(
          auth,
          authData.email,
          authData.password,
        );

        setSuccess("Account created successfully!");
      }

      setUser(result.user);
      setAuthData({ email: "", password: "" });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const result = await signInWithPopup(auth, googleProvider);

      setUser(result.user);
      setSuccess("Google login successful!");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Logout
  const handleLogout = async () => {
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      await signOut(auth);

      setUser(null);
      setAuthData({ email: "", password: "" });
      setIsLogin(true);
      setSuccess("Logged out successfully!");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Row className="min-vh-100 justify-content-center align-items-center">
        <Col xs={12} sm={9} md={6} lg={4}>
          <Card className="p-4 shadow">
            <h2 className="text-center mb-3">
              {user ? "Welcome" : isLogin ? "Login" : "Sign Up"}
            </h2>

            {/* Success Alert */}
            {success && (
              <Alert
                variant="success"
                dismissible
                onClose={() => setSuccess("")}
              >
                {success}
              </Alert>
            )}

            {/* Error Alert */}
            {error && (
              <Alert variant="danger" dismissible onClose={() => setError("")}>
                {error}
              </Alert>
            )}

            {user ? (
              <div className="text-center">
                <Button
                  variant="danger"
                  className="w-100"
                  onClick={handleLogout}
                  disabled={loading}
                >
                  {loading ? "Please wait..." : "Logout"}
                </Button>
              </div>
            ) : (
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={authData.email}
                    onChange={(e) => handleChange("email", e)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={authData.password}
                    onChange={(e) => handleChange("password", e)}
                    minLength={6}
                    required
                  />
                </Form.Group>

                <Button
                  variant="success"
                  type="submit"
                  className="w-100 mb-2"
                  disabled={loading}
                >
                  {loading ? "Please wait..." : isLogin ? "Login" : "Sign Up"}
                </Button>

                <Button
                  variant="outline-secondary"
                  type="button"
                  className="w-100 mb-2"
                  disabled={loading}
                  onClick={() => {
                    setIsLogin((prev) => !prev);
                    setError("");
                    setSuccess("");
                  }}
                >
                  {isLogin ? "New user? Sign up" : "Already registered? Login"}
                </Button>

                <Button
                  variant="warning"
                  type="button"
                  className="w-100"
                  onClick={handleGoogleLogin}
                  disabled={loading}
                >
                  {loading ? "Please wait..." : "Continue with Google"}
                </Button>
              </Form>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
