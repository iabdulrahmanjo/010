import React, { Component } from "react";
import Card from "../components/card";
import { products } from "../utils/_DATA";

class Journey extends Component {
  state = {
    query: "",
    search_mode: false,
    result: products,
  };

  handleInputChange = (event) => {
    const query = event.target.value;
    if (!query) {
      this.setState({ query, search_mode: false, result: products });
    } else {
      this.setState({ query, search_mode: true });
    }
  };

  handleSubmit = () => {
    const q = this.state.query;
    const p = products.filter((product) => product.name === q);
    this.setState({ result: p });
  };

  render() {
    const { result } = this.state;
    return (
      <div style={{ padding: "3rem 3rem" }}>
        <div className="search">
          <input
            dir="rtl"
            type="text"
            className="search_input"
            placeholder="ابحث عن منتج"
            onChange={this.handleInputChange}
          />
          <button
            className="search_button"
            disabled={!this.state.search_mode}
            onClick={this.handleSubmit}
          >
            انطلق
          </button>
        </div>
        <div className="deck">
          {result.length > 0 ? (
            result.map((p, index) => <Card key={index} product={p} />)
          ) : (
            <p style={{ fontSize: "3rem", marginTop: "8rem" }}>
              هذا المنتج غير موجود
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default Journey;
