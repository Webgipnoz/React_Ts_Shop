import React from "react";
import { Row, Col } from "react-bootstrap";
import StoreItem from "../components/StoreItem";

import items from "../data/items.json";

const StorePage = () => {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {items.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default StorePage;
