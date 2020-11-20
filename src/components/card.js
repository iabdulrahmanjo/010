import React, { useContext } from "react";
import { JourneyContext } from "../context/journeyContext";
import getIcon from "../utils/images";

const Card = ({ product, iconSize, nameSize, ...props }) => {
  return (
    <div {...props}>
      <div className="card-img" style={{ width: `${iconSize}` }}>
        <img src={getIcon(product.fileName)} alt={product.name} />
      </div>
      <div className="card-name" style={{ fontSize: `${nameSize}` }}>
        <h1>{product.name}</h1>
      </div>
    </div>
  );
};

export default Card;
