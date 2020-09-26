import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>استديو 010</h1>

        <ul>
          <li className="category-1">
            <Link to="/category-1">الباحثين عن الحلول</Link>
          </li>
          <li className="category-2">
            <Link to="/category-2">الباحثين عن المحيط الأزرق</Link>
          </li>
          <li className="category-3">
            <Link to="/category-3">الباحثين عن أفكار</Link>
          </li>
        </ul>
      </div>
    );
  }
}
