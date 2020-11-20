import React, { useContext } from "react";
import Button from "../components/button";
import PointTracker from "../components/pointTracker";
import ProgressBar from "../components/progressBar";
import ProductsView from "./productsView";
import ProductQuestions from "./productQuestions";
import { JourneyContext } from "../context/journeyContext";

const Journey = (props) => {
  const { data, nextPhase } = useContext(JourneyContext);
  return (
    <div className="journey">
      <div className="journey-tracking">
        <div className="wrapper">
          <div className="journey-tracking-content">
            <Button type="cancel">خروج</Button>
            <ProgressBar />
            <PointTracker total={10} />
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="journey-content" style={{ margin: "auto" }}>
          {data.phase === "choosing product" ? (
            <ProductsView />
          ) : (
            data.phase === "answering Q" && <ProductQuestions />
          )}
        </div>
      </div>
      <div className="journey-footer">
        <div className="wrapper">
          <div className="footer">
            <Button
              type="next"
              className="footer-btn footer-btn-primary"
              onClick={nextPhase}
              disabled={!data.product}
            >
              التالي
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
