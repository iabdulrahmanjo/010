import React from "react";
import { BsFillExclamationCircleFill } from "react-icons/bs";

const Hint = (props) => {
  return (
    <div className="hint">
      <p className="hint-text">تلميح</p>
      <BsFillExclamationCircleFill className="hint-icon" />
    </div>
  );
};

export default Hint;
