import React from "react";
import { Link } from "react-router-dom";

const DecCard = ({ type, desc, head, color, Icon }) => {
  return (
    <Link to={`app/${type}`} className={`Dcard ${color}`}>
      <div className="Dcard-content">
        <div className="Dcard-content-text">
          <p className="Dcard-content-text--head">{head}</p>
          <p className="Dcard-content-text--desc">{desc}</p>
        </div>
        <div className="Dcard-content-icon">
          <Icon />
        </div>
      </div>
    </Link>
  );
};

export default DecCard;
