import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../home.scss";
export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <header className="home-header" dir="rtl">
          <div className="wrapper">
            <nav
              style={{
                padding: "2rem",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h1 style={{ fontSize: "2rem", color: "white" }}>منصة زيرو</h1>
              <button
                style={{
                  fontSize: "1.7rem",
                  fontFamily: "inherit",
                  color: "white",
                  backgroundColor: "transparent",
                  border: "none",
                  // padding: "1rem",
                  borderRadius: "2rem",
                  color: "lightgray",
                }}
              >
                تسجيل دخول
              </button>
            </nav>
          </div>
        </header>

        <div className="home-header-content">
          <h1 className="home-header-content-heading">
            اجعل لفكرتك قيمة عظيمة​
          </h1>
          <p className="home-header-content-pargraph">
            استديو زيرو يمكنك من خلق قيمة عظيمة لمشروعك، من خلال تطوير وتوليد
            وابتكار أفكار ملهمة غير مألوفة ​
          </p>

          <button className="home-header-content-btn">
            <Link to="/app">ابدأ بتطوير فكرتك الآن​</Link>
          </button>
        </div>
        <div className="wrapper">
          <ul>
            {/* <li className="category-1">
            <Link to="/app">الباحثين عن الحلول</Link>
          </li>
          <li className="category-2">
            <Link to="/category-2">الباحثين عن المحيط الأزرق</Link>
          </li> */}
          </ul>
        </div>
      </div>
    );
  }
}
