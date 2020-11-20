import React, { useContext } from "react";
import { JourneyContext } from "../context/journeyContext";

const ProgressBar = ({ now }) => {
  const { data } = useContext(JourneyContext);
  return (
    <div className="progressBar">
      <div
        className="progressBar-fill"
        style={{ width: `${data.progressPercentage}%` }}
      >
        <span className="progressBar-num">&nbsp;</span>
      </div>
    </div>
  );
};

export default ProgressBar;
