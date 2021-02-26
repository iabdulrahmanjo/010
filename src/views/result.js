import React from "react";
import { withRouter } from "react-router-dom";
import Button from "../components/button";
import Card from "../components/card";
import CollapseableList from "../components/collapseableList";
import { JourneyContext } from "../context/journeyContext";
import styled, { keyframes } from "styled-components";
import fadeIn from "react-animations/lib/fade-in";

const FadeInAnimation = keyframes`${fadeIn}`;
const FadeIn = styled.div`
  animation: 0.2s ${FadeInAnimation};
`;

const Result = (props) => {
  const { data, reset } = React.useContext(JourneyContext);
  return (
    <FadeIn>
      <div className="result">
        <div className="result-head">
          <div className="result-head-content">
            <h1 className="result-head-heading">حصاد الرحلة</h1>
            <div
              className="result-head-action"
              style={{ justifyContent: "flex-end" }}
            >
              {/* <Button type="skip" className="footer-btn footer-btn-tritary">
                أفكاري
              </Button> */}
              <Button
                type="skip"
                className="footer-btn  green-btn"
                onClick={reset}
              >
                ابدأ من جديد
              </Button>
            </div>
          </div>
        </div>
        <div className="result-body">
          <div className="result-body-right">
            <div className="productQuestions-right--card">
              <Card
                product={data.product}
                iconSize={"14rem"}
                nameSize={"1.5rem"}
                className="card"
              />
            </div>
            {/* <div className="result-body-right-actions">
              <Button type="skip" className="footer-btn black-btn">
                تحميل
              </Button>
              <Button
                type="skip"
                className="footer-btn center footer-btn-tritary"
              >
                طباعة
              </Button>
            </div> */}
          </div>
          <div className="result-body-left">
            {Object.keys(data.ideas).map((q, index) => (
              <CollapseableList
                question={q}
                key={index}
                ideas={[data.ideas[q]]}
              />
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default withRouter(Result);
