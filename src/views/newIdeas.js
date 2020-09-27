import React from "react";
import { Link } from "react-router-dom";

const NewIdeas = () => {
  return (
    <div className="newIdeas">
      <h1>اختر مسارك</h1>
      <ul>
        <li>
          <Link to={`/category-3/journey`}>رحلة البحث عن فكرة</Link>
        </li>
        <li>
          <Link to={`/category-3/match`}>الرابط العجيب</Link>
        </li>
      </ul>
    </div>
  );
};

export default NewIdeas;
