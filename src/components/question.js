import React, { useContext } from "react";
import { JourneyContext } from "../context/journeyContext";

const Question = (props) => {
  const { data } = useContext(JourneyContext);
  return (
    <div className="question">
      <h1>
        {data.questions[data.questionCounter] === 10
          ? 9
          : data.questions[data.questionCounter]}
      </h1>
    </div>
  );
};

export default Question;
