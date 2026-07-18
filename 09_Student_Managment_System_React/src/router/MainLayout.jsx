import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavbarComponents from "../components/UI/Navbar";

const MainLayout = () => {
  return (
    <Container>
      <NavbarComponents />

      <div className="container mt-4">
        <Outlet />
      </div>
    </Container>
  );
};

export default MainLayout;