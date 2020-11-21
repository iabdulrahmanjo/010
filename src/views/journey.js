import React, { useContext } from "react";

import ProductsView from "./productsView";
import ProductQuestions from "./productQuestions";
import { JourneyContext } from "../context/journeyContext";
import TrackingHeader from "../components/trackingHeader";
import Footer from "../components/footer";

const Journey = (props) => {
  const { data } = useContext(JourneyContext);
  return (
    <div className="journey">
      <div className="journey-tracking">
        <TrackingHeader />
      </div>
      <div className="wrapper">
        <div className="journey-content">
          {data.phase === "choosing-product" ? (
            <ProductsView />
          ) : (
            data.phase === "answering-Q" && <ProductQuestions />
          )}
        </div>
      </div>
      <div className="journey-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Journey;
