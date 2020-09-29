import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Card from "../components/card";
import Result from "../views/result";
import { products, getQuestions } from "../utils/_DATA";
class JourneyRoad extends Component {
  state = {
    questions: getQuestions(),
    index: 0,
    ideas: [],
    text: "",
    end: false,
  };

  handleNext = () => {
    const text = this.state.text;
    this.setState((state) => ({
      index: state.index + 1,
      ideas: [...state.ideas, text],
      text: "",
    }));
  };
  handleSkip = () => {
    this.setState((state) => ({
      index: state.index + 1,
      text: "",
    }));
  };
  render() {
    const product = products.filter(
      (p) => this.props.match.params.product === p.fileName
    );

    const { index, questions, text, end, ideas } = this.state;

    if (!end && index < 10) {
      return (
        <div className="journey">
          <div className="journey-progress">{index + 1}/10</div>
          <div className="journey-space">
            <Card product={product[0]} type="journey" />
            <div className="journey-space--question">
              <h1>{questions[index]}</h1>
              <div className="journey-space--question-answer">
                <textarea
                  dir="rtl"
                  cols="43"
                  rows="5"
                  value={text}
                  placeholder="اكتب فكرتك"
                  onChange={(e) => this.setState({ text: e.target.value })}
                />
              </div>
            </div>
            <div className="journey-space--btns">
              <div
                style={{
                  width: "16rem",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <button
                  onClick={this.handleSkip}
                  className="journey-space--btns-btn skip"
                >
                  تخطي
                </button>
                <button
                  className="journey-space--btns-btn next"
                  disabled={text.length > 0 ? false : true}
                  onClick={this.handleNext}
                >
                  التالي
                </button>
              </div>
              <button
                onClick={() => this.setState({ end: true })}
                className="journey-space--btns-btn finish"
              >
                انهاء الرحلة
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <Result
          ideas={ideas.reverse()}
          product={product}
          title="حصاد الرحلة"
          path="/journey"
        />
      );
    }
  }
}

export default withRouter(JourneyRoad);
