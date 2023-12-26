import React from "react";
import type { CartDataProps } from "../pages/Root";

interface CartProps {
  data: CartDataProps[];
  handleDisplayCart: () => void;
  isCartDisplayed: boolean;
}

const DisplayCart: React.FC<CartProps> = ({
  data,
  handleDisplayCart,
  isCartDisplayed,
}) => {
  return (
    <div className={`card-modal ${isCartDisplayed ? "open" : ""}`}>
      <h2>Your Cart</h2>
      {data.map((dataItem) => (
        <div key={dataItem.item.id + "-modal"} className="cart-item">
          <div className="item-title">{dataItem.item.title}</div>
          <div className="item-details">
            <span>Quantity: {dataItem.count}</span>
            <span>
              Price: {parseFloat(dataItem.item.price) * dataItem.count} $
            </span>
          </div>
        </div>
      ))}
      <div className="total-price">
        Total price is :{" "}
        {data.reduce(
          (sum, currentObj) =>
            sum + parseFloat(currentObj.item.price) * currentObj.count,
          0
        )}
        {" " + "$"}
      </div>
      <button onClick={handleDisplayCart}>Close</button>
    </div>
  );
};

export default DisplayCart;
