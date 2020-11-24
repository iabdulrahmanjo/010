import React from "react";
import { useHistory } from "react-router-dom";
import { BsX } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { JourneyContext } from "../context/journeyContext";

const CancelBtn = (props) => {
  const history = useHistory();
  const { reset } = React.useContext(JourneyContext);

  const agian = () => {
    history.goBack();
    reset();
  };
  return (
    <div className="CancelBtn">
      <button className="CancelBtn-btn" onClick={agian}>
        <BsX className="CancelBtn-icon" />
        {props.children}
      </button>
    </div>
  );
};

const NextBtn = (props) => {
  return (
    <button {...props}>
      <IoIosArrowBack className="btn-icon btn-icon-next" />
      {props.children}
    </button>
  );
};

const backBtn = (props) => {
  return (
    <button {...props}>
      {props.children}
      <IoIosArrowForward className="btn-icon btn-icon-back" />
    </button>
  );
};

const skipBtn = (props) => {
  return <button {...props}>{props.children}</button>;
};

const addBtn = (props) => {
  return <button {...props}>{props.children}</button>;
};

const Button = ({ type, ...props }) => {
  const components = {
    cancel: CancelBtn,
    next: NextBtn,
    back: backBtn,
    skip: skipBtn,
    add: addBtn,
  };

  if (!type) {
    return null;
  }

  const Component = components[type];
  return <Component {...props} />;
};

export default Button;
