import React from "react";
import { Col, Row } from "reactstrap";
import { ProductType } from "../services/products";
import ProductCard from "./ProductCard";

type ProductListProps = {
  products: ProductType[];
};

const ProductsList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <>
      <Row className="g-5">
        {products.map((product) => (
          <Col md={4} lg={3} xl={3} key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ProductsList;
