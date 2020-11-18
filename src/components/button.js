import React from "react";
import { useHistory } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
const BackBtn = (props) => {
  const history = useHistory();
  return (
    <div className="backBtn">
      <IoIosArrowBack className="backBtn-icon" />
      <button className="backBtn-btn" onClick={() => history.goBack()}>
        رجوع
      </button>
    </div>
  );
};

const Button = ({ type, ...props }) => {
  const components = {
    back: BackBtn,
  };

  if (!type) {
    return null;
  }

  const Component = components[type];
  return <Component {...props} />;
};

export default Button;
