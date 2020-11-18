import React, { Component } from "react";
import Button from "../components/button";
import Card from "../components/card";
import Nav from "../components/nav";
import Search from "../components/search";
import { products } from "../utils/_DATA";

class Journey extends Component {
  state = {
    query: "",
    loading: false,
    result: products,
    filterResult: products,
  };

  handleInputChange = (event) => {
    const query = event.target.value;
    if (!query) {
      this.setState({ query, filterResult: this.state.result, loading: false });
    } else {
      this.setState({ query, loading: true });
      const filteredRes = this.state.result.filter(
        (product) => product.name.indexOf(query) !== -1
      );
      this.setState({ loading: false, filterResult: filteredRes });
    }
  };

  render() {
    const { loading, filterResult } = this.state;
    return (
      <div className="product">
        <Nav cta={<Button type="back" />} />
        <div className="wrapper">
          <div className="product-content">
            <div className="product-content--header">
              <h1 className="primary-heading">
                اختر منتجًا لتطور أفكارًا عليه
              </h1>
              <Search handleChange={this.handleInputChange} />
            </div>
            <div className="product-content--deck">
              {loading ? (
                <p className="info-text">تحميل...</p>
              ) : filterResult.length > 0 ? (
                filterResult.map((p, index) => <Card key={index} product={p} />)
              ) : (
                <p className="info-text">هذا المنتج غير موجود</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Journey;
