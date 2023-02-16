import Joi from "joi";
import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductForm = ({ onSubmit, initialValue }) => {
  const [form, setForm] = useState(
    initialValue || {
      name: "",
      src: "",
      price: 0,
      stock: 0,
    }
  );

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const schema = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    src: Joi.string().required(),
    price: Joi.number().positive().precision(2).required(),
    stock: Joi.number().positive().integer().required(),
  });

  const handleChange = ({ currentTarget: input }) => {
    setForm({ ...form, [input.name]: input.value });
    const { error } = schema
      .extract(input.name)
      .label(input.name)
      .validate(input.value);

    if (error) {
      setErrors({ ...errors, [input.name]: error.details[0].message });
    } else {
      delete errors[input.name];
    }
  };

  const isFormInvalid = () => {
    const result = schema.validate(form);
    console.log(result);
    return !!result.error;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    onSubmit(form);
    navigate("/");
  };
  return (
    <>
      <Container>
        <Row className="justify-content-center mt-3">
          <Col xs={6} className="text-start">
            <Card>
              <Card.Header>
                {" "}
                <h4>{initialValue ? "Edit" : "Add"} Product</h4>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mt-2">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Product Name"
                      name="name"
                      onChange={handleChange}
                      value={form.title}
                      isInvalid={!!errors.title}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mt-2">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="0.00"
                      name="price"
                      onChange={handleChange}
                      value={form.price}
                      isInvalid={!!errors.price}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.price}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mt-2">
                    <Form.Label>Image Src</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=""
                      name="src"
                      onChange={handleChange}
                      value={form.image}
                      isInvalid={!!errors.image}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.image}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Button
                    variant="success"
                    type="submit"
                    className="mt-3"
                    disabled={isFormInvalid()}
                  >
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductForm;
