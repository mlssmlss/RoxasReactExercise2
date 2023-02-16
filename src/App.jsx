import React, { Component, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { products_data } from "./products";
import AddProductPage from "./pages/AddProductPage";
import EditProductPage from "./pages/EditProductPage";
import ProductsPage from "./pages/ProductsPage";
function App() {
  const [products, setProducts] = useState(products_data);
  const [cart, setCart] = useState([]);

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleReset = () => {
    setProducts(
      products.map((product) => {
        return {
          ...product,
          value: 0,
        };
      })
    );
    setCart([]);
  };

  const handleIncrement = (id) => {
    handleAddCart(id);
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            value: product.value + 1,
          };
        }
        return product;
      })
    );
  };

  const handleDecrement = (id) => {
    setProducts(
      products.map((product) => {
        if (product.id === id && product.value > 0) {
          if (product.value === 1) {
            handleRemoveCart(product.id);
          }
          return {
            ...product,
            value: product.value - 1,
          };
        }
        return product;
      })
    );
  };

  const handleAddCart = (id) => {
    if (cart.find((item) => item.id === id)) {
    } else {
      let newCartItem = {
        id: id,
      };

      setCart([...cart, newCartItem]);
    }
  };

  const handleRemoveCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleAddProduct = (product) => {
    setProducts([
      ...products,
      { ...product, id: products.length * 999 + 1, value: 0 },
    ]);
  };

  const handleEditProduct = (id, product) => {
    setProducts(
      products.map((prod) => {
        if (prod.id === id) {
          return {
            ...product,
            id,
            value: prod.value,
          };
        }

        return prod;
      })
    );
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route
          path="/products"
          element={
            <ProductsPage
              products={products}
              cart={cart}
              onReset={handleReset}
              onDelete={handleDelete}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
            />
          }
        />
        <Route
          path="/products/add"
          element={<AddProductPage onAddProduct={handleAddProduct} />}
        />
        <Route
          path="/products/:id/edit"
          element={
            <EditProductPage
              products={products}
              onEditProduct={handleEditProduct}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
