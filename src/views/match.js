import React, { Component } from "react";
import Card from "../components/card";
import { getCards } from "../utils/_DATA";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import Result from "./result";
class Match extends Component {
  state = {
    cards: getCards(),
    text: "",
    idea: [],
    end: false,
    max: 10,
  };

  handleSkip = () => {
    this.setState((state) => ({
      cards: getCards(),
      text: "",
      max: state.max - 1,
    }));
  };
  render() {
    const { text, end, max, cards, idea } = this.state;

    if (end || max === 0) {
      return (
        <Result
          product={cards}
          ideas={idea}
          title="النتيجة"
          path="/category-3"
        />
      );
    }
    return (
      <div className="match">
        <div className="match-cards">
          <Card product={cards[0]} type="journey" />
          <BsFillQuestionCircleFill
            size={80}
            style={{
              position: "absolute",
              left: "50%",
              transform: "translate(-50%, 0%)",
              zIndex: "1000",
            }}
          />
          <Card product={cards[1]} type="journey" />
        </div>
        <div className="match-space">
          <h1 className="match-space--title">ماهو الرابط العجيب ؟</h1>
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
                onClick={() =>
                  this.setState({ idea: [this.state.text], end: true })
                }
              >
                التالي
              </button>
            </div>
            <button
              onClick={() => this.setState({ end: true })}
              className="journey-space--btns-btn finish"
            >
              انهاء
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Match;
