import React, { useContext, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Badge,
} from "react-bootstrap";

import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { FaBoxOpen } from "react-icons/fa6";
import { VscClearAll } from "react-icons/vsc";

const ExpenseList = () => {
  const {
    expenseList,
    deleteExpense,
    handleExpenseEdit,
  } = useContext(ExpenseContext);

  const [expenseQuery, setExpenseQuery] = useState({
    title: "",
    type: "all",
    category: "all",
    sort: "",
  });

  const handleChange = (field, e) => {
    setExpenseQuery((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  // FILTER LOGIC
  const filterList = expenseList
    .filter((l) =>
      l.title
        .toLowerCase()
        .includes(expenseQuery.title.toLowerCase())
    )
    .filter((l) =>
      expenseQuery.type === "all"
        ? true
        : l.type === expenseQuery.type
    )
    .filter((l) =>
      expenseQuery.category === "all"
        ? true
        : l.category === expenseQuery.category
    );

  // SORT LOGIC
  const sortedList = [...filterList].sort((a, b) => {
    if (expenseQuery.sort === "asc") {
      return b.id - a.id;
    }

    if (expenseQuery.sort === "desc") {
      return a.id - b.id;
    }

    if (expenseQuery.sort === "moneyAsc") {
      return Number(a.amount) - Number(b.amount);
    }

    if (expenseQuery.sort === "moneyDsc") {
      return Number(b.amount) - Number(a.amount);
    }

    return 0;
  });

  // CLEAR FILTER
  const clearFilter = () => {
    setExpenseQuery({
      title: "",
      type: "all",
      category: "all",
      sort: "",
    });
  };

  return (
    <>
      <Container className="card p-4 mt-3 shadow">

        {/* FILTER FORM */}
        <Form>
          <Row>
            {/* SEARCH */}
            <Col md={8}>
              <Form.Group>
                <Form.Label>Search</Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Enter title"
                  value={expenseQuery.title}
                  onChange={(e) =>
                    handleChange("title", e)
                  }
                />
              </Form.Group>
            </Col>

            {/* TYPE */}
            <Col md={4}>
              <Form.Group>
                <Form.Label>Expense Type</Form.Label>

                <Form.Select
                  value={expenseQuery.type}
                  onChange={(e) =>
                    handleChange("type", e)
                  }
                >
                  <option value="all">
                    All Expense Types
                  </option>

                  <option value="credit">
                    Credit
                  </option>

                  <option value="debit">
                    Debit
                  </option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          {/* CATEGORY + SORT + CLEAR */}
          <Row className="mt-3">

            {/* CATEGORY */}
            <Col md={4}>
              <Form.Group>
                <Form.Label>Category</Form.Label>

                <Form.Select
                  value={expenseQuery.category}
                  onChange={(e) =>
                    handleChange("category", e)
                  }
                >
                  <option value="all">
                    All Categories
                  </option>

                  <option value="food">
                    Food
                  </option>

                  <option value="general">
                    General
                  </option>

                  <option value="travel">
                    Travel
                  </option>

                  <option value="hospital">
                    Hospital
                  </option>

                  <option value="school">
                    School
                  </option>

                  <option value="other">
                    Other
                  </option>
                </Form.Select>
              </Form.Group>
            </Col>

            {/* SORT */}
            <Col md={4}>
              <Form.Group>
                <Form.Label>Sort By</Form.Label>

                <Form.Select
                  value={expenseQuery.sort}
                  onChange={(e) =>
                    handleChange("sort", e)
                  }
                >
                  <option value="">
                    Sort By
                  </option>

                  <option value="asc">
                    Ascending
                  </option>

                  <option value="desc">
                    Descending
                  </option>

                  <option value="moneyAsc">
                    Money Ascending
                  </option>

                  <option value="moneyDsc">
                    Money Descending
                  </option>
                </Form.Select>
              </Form.Group>
            </Col>

            {/* CLEAR BUTTON */}
            <Col md={4}>
              <Button
                className="mt-4 w-100"
                variant="outline-secondary"
                onClick={clearFilter}
              >
                <VscClearAll /> Clear Filters
              </Button>
            </Col>

          </Row>
        </Form>

        {/* EXPENSE TABLE */}
        {sortedList.length > 0 ? (
          <table className="table table-striped table-hover table-bordered mt-4">

            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Category</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Type</th>
                <th>Date</th>
                <th colSpan={2}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {sortedList.map((data, index) => (
                <tr key={data.id}>

                  <td>{index + 1}</td>

                  <td>{data.title}</td>

                  <td>{data.category}</td>

                  <td>{data.description}</td>

                  <td>{data.amount}</td>

                  <td>
                    {data.type === "credit" ? (
                      <Badge pill bg="success">
                        {data.type}
                      </Badge>
                    ) : (
                      <Badge pill bg="danger">
                        {data.type}
                      </Badge>
                    )}
                  </td>

                  <td>{data.date}</td>

                  {/* EDIT */}
                  <td>
                    <Button
                      variant="warning"
                      onClick={() =>
                        handleExpenseEdit(data.id)
                      }
                    >
                      <CiEdit fontSize={20} /> Edit
                    </Button>
                  </td>

                  {/* DELETE */}
                  <td>
                    <Button
                      variant="danger"
                      onClick={() =>
                        deleteExpense(data.id)
                      }
                    >
                      <MdDelete fontSize={20} /> Delete
                    </Button>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        ) : (
          <h1 className="text-center mt-5">
            <FaBoxOpen /> No Data Found
          </h1>
        )}
      </Container>
    </>
  );
};

export default ExpenseList;