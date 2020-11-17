import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/nav";
const NewIdeas = () => {
  return (
    <div className="app">
      <Nav />
      <div className="wrapper">
        <h1 className="primary-heading">اختر طريقة توليد الآفكار</h1>
        <ul>
          <li>
            <Link to={`/app/journey`}>رحلة البحث عن فكرة</Link>
          </li>
          <li>
            <Link to={`/app/match`}>الرابط العجيب</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NewIdeas;
