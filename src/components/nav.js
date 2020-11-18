import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ cta }) => {
  return (
    <nav className="nav">
      <div className="wrapper">
        <div className="nav-content">
          <ul className="nav-link">
            <li className="nav-link--item">
              <Link to="/">العودة الى الرئيسية</Link>
            </li>
          </ul>
          <div className="nav-heading">
            <p className="nav-heading--text">استديو 010</p>
          </div>
          {cta ? cta : <div style={{ flex: "1" }}>&nbsp;</div>}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
