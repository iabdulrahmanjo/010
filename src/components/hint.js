import React from "react";
import { BsFillExclamationCircleFill } from "react-icons/bs";

const Hint = (props) => {
  return (
    <div className="hint">
      <div className="hint-indcator">
        <p className="hint-text">تلميح</p>
        <BsFillExclamationCircleFill className="hint-icon" />
      </div>
      <div className="hint-modal">
        <p className="hint-modal-text">
          لكي تكون أفكارك إبداعية، حاول أن تستخرج اكبر قدر ممكن من الإجابات
          بناءا على السؤال!
        </p>
      </div>
    </div>
  );
};

export default Hint;
