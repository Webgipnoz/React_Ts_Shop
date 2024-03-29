import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { incrementByValue } from "../redux/slices/itemsSlice";

import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const [submitPressed, setSubmitPressed] = useState(false);

  const handleAddToCart = () => {
    setSubmitPressed(true);
  };

  function incrementItem() {
    setQuantity(quantity + 1);
  }

  function decrementItem() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  const handleItemSubmit = () => {
    if (quantity !== 0) {
      dispatch(incrementByValue({ id, value: quantity }));
      setQuantity(0);
      setSubmitPressed(false);
    }
  };

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="fs-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {submitPressed === false ? (
            <Button className="w-100" onClick={handleAddToCart}>
              + Add To Card
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5 rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5 rem" }}
              >
                <Button onClick={() => decrementItem()}> - </Button>
                <div>
                  <span className="fs-3">{quantity}</span>
                </div>
                <Button onClick={() => incrementItem()}> + </Button>
              </div>
              <Button variant="success" size="sm" onClick={handleItemSubmit}>
                Submit
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
