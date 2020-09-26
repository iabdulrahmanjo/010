import React from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";

const NewIdeas = () => {
  let match = useRouteMatch();
  return (
    <div>
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
