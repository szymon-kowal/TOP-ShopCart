import React from "react";
import { useParams, Link } from "react-router-dom";
import { useMyContext } from "./Root";

const DisplayItems: React.FC = () => {
  const { category } = useParams();
  const { fetchedData: data } = useMyContext();
  return (
    <div className="itemCont">
      {data.map((item) => {
        if (category !== undefined) {
          if (item.category !== category) {
            return null;
          }
        }

        return (
          <div className="grid-item" key={item.id}>
            <Link to={`/${category}/${item.id}`} className="dataItem">
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                />
                <div className="underPhoto">
                  <div className="title">{item.title}</div>
                  <div className="price">{item.price + " $"}</div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayItems;
