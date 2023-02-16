import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";
const NavBar = ({ onReset, totalCount, products, cart }) => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar variant="bg-body-tertiary">
        <Container>
          <Cart totalCount={totalCount} products={products} cart={cart}></Cart>
          <Button
            variant="light"
            className="btn-outline-secondary"
            onClick={() => {
              navigate("/products/add");
            }}
          >
            <span>
              <a>Add Product</a>
              <i className="bi bi-plus-circle p-1" />
            </span>
          </Button>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
