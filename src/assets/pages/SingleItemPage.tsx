import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useMyContext } from "./Root";
import type { Item } from "../components/interfaces";

// Should I just read number of items

const DisplaySingleItem: React.FC = () => {
  const { item: itemID } = useParams();
  const { fetchedData: data, handleSetCartData } = useMyContext();
  const [itemCount, setItemCount] = useState<number>(1);

  const findItem = data.find((item) => item.id.toString() === itemID) satisfies
    | Item
    | undefined;

  function handleDecrease(): void {
    setItemCount((prev) => {
      if (prev - 1 <= 0) {
        return 0;
      } else {
        return prev - 1;
      }
    });
  }

  function handleIncrease(): void {
    setItemCount((prev) => prev + 1);
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>): void {
    const parsedValue = parseInt(e.target.value, 10);

    if (!isNaN(parsedValue) && parsedValue >= 0) {
      setItemCount(parsedValue);
    } else {
      setItemCount(0);
    }
  }

  if (findItem == null || findItem === undefined) return <>No item found</>;
  return (
    <div className="single-item-contianer">
      <img src={findItem.image} />
      <div className="single-item-desc">Description</div>
      <button onClick={handleDecrease}>-</button>
      <input
        className="input-item"
        type="number"
        onInput={handleInput}
        value={itemCount}
      ></input>
      <button onClick={handleIncrease}>+</button>
      <button
        onClick={() => {
          handleSetCartData(findItem, itemCount);
        }}
      >
        add to cart
      </button>
    </div>
  );
};

export default DisplaySingleItem;
