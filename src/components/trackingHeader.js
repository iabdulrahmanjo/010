import React from "react";
import Button from "../components/button";
import PointTracker from "../components/pointTracker";
import ProgressBar from "../components/progressBar";

const TrackingHeader = (props) => {
  return (
    <div className="wrapper">
      <div className="journey-tracking-content">
        <Button type="cancel">خروج</Button>
        <ProgressBar />
        <PointTracker total={10} />
      </div>
    </div>
  );
};

export default TrackingHeader;
