import React, { useContext, useEffect, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { Form, Container, Row, Col, Button } from "react-bootstrap";

const AddExpense = () => {
  const { AddExpense, editValue } = useContext(ExpenseContext);

  const [input, setInput] = useState({
    title: "",
    category: "General",
    description: "",
    amount: 0,
    type: "debit",
    date: "",
  });

  useEffect(() => {
    editValue ? setInput(editValue) : null;
  }, [editValue]);

  const handleChange = (field, e) => {
    setInput((prev) => {
      return {
        ...prev,
        [field]: e.target.value,
      };
    });
  };

  const hnadleSubmit = (e) => {
    e.preventDefault();

    AddExpense(input);

    setInput({
      title: "",
      category: "",
      description: "",
      amount: 0,
      type: "",
      date: "",
    });
  };

  return (
    <>
      <Container className="card p-4 shadow">
        <Form onSubmit={hnadleSubmit}>
          {/* Title & Description */}
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label htmlFor="title">Title</Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Enter title"
                  name="title"
                  value={input.title}
                  onChange={(e) => handleChange("title", e)}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label htmlFor="description">Description</Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Enter description"
                  name="description"
                  value={input.description}
                  onChange={(e) => handleChange("description", e)}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Amount & Date */}
          <Row className="mt-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Amount</Form.Label>

                <Form.Control
                  type="number"
                  placeholder="Enter amount"
                  name="amount"
                  value={input.amount}
                  onChange={(e) => handleChange("amount", e)}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>Date</Form.Label>

                <Form.Control
                  type="date"
                  name="date"
                  value={input.date}
                  onChange={(e) => handleChange("date", e)}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Category & Type */}
          <Row className="mt-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Category</Form.Label>

                <Form.Select
                  name="category"
                  value={input.category}
                  onChange={(e) => handleChange("category", e)}
                >
                  <option value="">Select Category</option>
                  <option value="food">Food</option>
                  <option value="general">General</option>
                  <option value="travel">Travel</option>
                  <option value="hospital">Hospital</option>
                  <option value="school">School</option>
                  <option value="other">Other</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>Expense Type</Form.Label>

                <Form.Select
                  name="type"
                  value={input.type}
                  onChange={(e) => handleChange("type", e)}
                >
                  <option value="debit">Debit</option>
                  <option value="credit">Credit</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          {/* Submit Button */}
          <Button className="mt-3 w-100" type="submit">
            {editValue ? "Update" : "Add"}
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default AddExpense;
