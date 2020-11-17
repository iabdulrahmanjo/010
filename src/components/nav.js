import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav className="nav">
      <div className="wrapper">
        <div className="nav-content">
          <div style={{ flex: "1 1" }}>&nbsp;</div>

          <div className="nav-heading">
            <p className="nav-heading--text">استديو 101</p>
          </div>
          <ul className="nav-link">
            <li className="nav-link--item">
              <Link to="/">العودة الى الرئيسية</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
