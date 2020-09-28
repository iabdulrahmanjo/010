import React from "react";
import { withRouter } from "react-router-dom";
import Card from "../components/card";

const Result = (props) => {
  console.log(props);
  return (
    <div className="result">
      <h1>حصاد الرحلة</h1>
      <div className="result-card">
        <Card product={props.product} type="journey" />
      </div>
      <div className="result-ideas">
        {props.ideas.length > 0 ? (
          props.ideas.map((i) => <div className="result-ideas--idea">{i}</div>)
        ) : (
          <h1>لم تكتب اي فكرة</h1>
        )}
      </div>
      <button
        onClick={() => props.history.push("/category-3/journey")}
        className="result-btn"
      >
        البدء من جديد
      </button>
    </div>
  );
};

export default withRouter(Result);
