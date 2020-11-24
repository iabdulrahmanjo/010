import React, { Component } from "react";
import Search from "../components/search";
import Card from "../components/card";
import { products } from "../utils/_DATA";
import { JourneyContext } from "../context/journeyContext";
import styled, { keyframes } from "styled-components";
import fadeIn from "react-animations/lib/fade-in";

const FadeInAnimation = keyframes`${fadeIn}`;
const FadeIn = styled.div`
  animation: 0.2s ${FadeInAnimation};
`;

export default class ProductsView extends Component {
  static contextType = JourneyContext;

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
      <FadeIn>
        <div className="journey-content">
          <div className="journey-content--header">
            <h1 className="primary-heading">اختر منتجًا لتطور أفكارًا عليه</h1>
            <Search handleChange={this.handleInputChange} />
          </div>
          <div className="journey-content--deck">
            {loading ? (
              <p className="info-text">تحميل...</p>
            ) : filterResult.length > 0 ? (
              filterResult.map((p, index) => (
                <Card
                  onClick={() => this.context.selectProduct(p)}
                  className={
                    this.context.data.product === p
                      ? "card card-selectable select"
                      : "card card-selectable"
                  }
                  key={index}
                  product={p}
                />
              ))
            ) : (
              <p className="info-text">هذا المنتج غير موجود</p>
            )}
          </div>
        </div>
      </FadeIn>
    );
  }
}
