import React from "react";

const PointTracker = ({ total }) => {
  return (
    <div className="pointTracker">
      <span className="pointTracker-point">{total}+</span>
    </div>
  );
};

export default PointTracker;
