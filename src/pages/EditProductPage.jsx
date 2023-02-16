import React from "react";
import { useParams } from "react-router-dom";
import Counter from "../components/Counter";
import ProductForm from "../components/ProductForm";

const EditProductPage = ({ products, onEditProduct }) => {
  const params = useParams();
  const { id, value, ...product } = products.find(
    (product) => product.id === +params.id
  );
  return (
    <div>
      <ProductForm
        initialValue={product}
        onSubmit={(form) => onEditProduct(id, form)}
      />
    </div>
  );
};

export default EditProductPage;
