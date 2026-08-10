import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { Col, Container, Row } from "react-bootstrap";

const Expenses = () => {
  const { credit, debit, balance } = useContext(ExpenseContext);

  return (
    <>
      <Container className=" align-center ">
        <h1>EXPENSE TRECAR</h1>
        <Row>
          <Col>
            <h1>Credite:{credit}</h1>
          </Col>
        </Row>

        <h1>Debite: {debit}</h1>
        <h1>Balance: {balance}</h1>
      </Container>
    </>
  );
};

export default Expenses;
