import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { Col, Container, Row } from "react-bootstrap";

const Expenses = () => {
  const { credit, debit, balance } = useContext(ExpenseContext);

  return (
    <>
      <div className="card shadow p-5 m-3">
        <h1 className="text-center mt-2">
           Expense Tracker
        </h1>

        <Container>
          <Row>
            <Col className="d-flex  gap-3 justify-content-center align-items-center mt-3">
              <div className="card shadow p-4 d-flex justify-content-center align-items-center">
                <h3>
                  Credit
                </h3>
                <h1 className="text-success"> ₹ {credit}</h1>
              </div>

              <div className="card shadow p-4 d-flex justify-content-center align-items-center">
                <h5>Debit</h5>
                <h1 className="text-danger"> ₹ {debit}</h1>
              </div>

              <div className="card shadow p-4 d-flex justify-content-center align-items-center">
                <h5>Balance</h5>
                <h1 className="text-primary"> ₹ {balance}</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Expenses;
