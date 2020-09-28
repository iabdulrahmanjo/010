import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const Card = ({ product, type }) => {
  const match = useRouteMatch();

  if (type === "journey") {
    return (
      <div className="card card-journey">
        <div className="card-img">
          <img
            src={require(`../icons/${product.fileName}.png`)}
            alt={product.name}
          />
        </div>
        <div className="card-name">
          <h1>{product.name}</h1>
        </div>
      </div>
    );
  }
  return (
    <Link to={`${match.url}/${product.fileName}`} className="card">
      <div className="card-img">
        <img
          src={require(`../icons/${product.fileName}.png`)}
          alt={product.name}
        />
      </div>
      <div className="card-name">
        <h1>{product.name}</h1>
      </div>
    </Link>
  );
};

export default Card;
