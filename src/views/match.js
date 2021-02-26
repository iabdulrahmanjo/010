import React, { Component } from "react";
import Card from "../components/card";
import { getCards } from "../utils/_DATA";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import Result from "./result";
import Button from "../components/button";
import Nav from "../components/nav";
import { Link } from "react-router-dom";
class Match extends Component {
  state = {
    cards: getCards(),
    text: "",
    idea: [],
    end: false,
    max: 5,
    area: "",
    start: false,
  };

  handleSkip = () => {
    this.setState((state) => ({
      cards: getCards(),
      text: "",
      max: state.max - 1,
    }));
  };

  handleNext = (e) => {
    this.setState((state) => ({
      cards: getCards(),
      text: "",
      max: state.max - 1,
      idea: [...state.idea, state.text],
    }));
  };
  render() {
    const { text, end, max, cards, idea, area, start } = this.state;

    // return (
    //   <p
    //     style={{ display: "flex", justifyContent: "center", fontSize: "8rem" }}
    //   >
    //     soon
    //   </p>
    // );

    return (
      <>
        <Nav>
          <ul className="nav-link">
            <li className="nav-link--item">
              <Link to="/app">خروج</Link>
            </li>
          </ul>
        </Nav>
        <div className="match">
          {/* <h1 style={{ margin: "4rem" }} className="primary-heading">
            الرابط العجيب
          </h1> */}
          {!start ? (
            <div
              style={{
                // paddingTop: "15rem",
                width: "100%",
                direction: "rtl",
                padding: "15rem 55rem",
              }}
            >
              <h1 className="primary-heading">ماهو اسم مشروعك ؟</h1>
              <input
                onChange={(e) => this.setState({ area: e.target.value })}
                placeholder="مثال: البرغر العجيب"
                style={{
                  marginTop: "1rem",
                  border: "1px solid lightgray",
                  borderRadius: ".5rem",
                  padding: "2rem 2.5rem",
                  width: "100%",
                  fontFamily: "inherit",
                }}
              />
              <Button
                type="next"
                style={{ direction: "ltr", marginTop: "3rem" }}
                className="footer-btn footer-btn-primary small"
                disabled={!area}
                onClick={() => this.setState({ start: true })}
              >
                التالي
              </Button>
            </div>
          ) : max === 0 ? (
            <div>
              <h1 className="primary-heading">
                حصيلة الروابط العجيبة التي ابتكرتها لمشروعك
              </h1>
              <div style={{ marginTop: "2rem", direction: "rtl" }}>
                {idea.map((i) => (
                  <div style={{ padding: "1rem" }} className="idea">
                    {i}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <>
              <div className="match-cards">
                <Card
                  product={cards[0]}
                  className={"card card-selectable mar"}
                />
                <p
                  size={80}
                  style={{
                    width: "10rem",
                    height: "10rem",
                    position: "absolute",
                    left: "50%",
                    transform: "translate(-50%, 0%)",
                    zIndex: "1000",
                    backgroundColor: "black",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    fontSize: "1.7rem",
                    textAlign: "center",
                  }}
                >
                  {area}
                </p>
                <Card product={cards[1]} className={"card card-selectable"} />
              </div>
              <div className="match-space">
                <h1 className="match-space--title">
                  ماهو الرابط العجيب بين مشروعك وبين الصور التي أمامك ؟
                </h1>
                <div className="match-space--question-answer">
                  <textarea
                    dir="rtl"
                    cols="66"
                    rows="5"
                    value={text}
                    placeholder="اكتب فكرتك"
                    onChange={(e) => this.setState({ text: e.target.value })}
                  />
                </div>
                <div
                  style={{ marginTop: "1rem" }}
                  className="match-space--btns"
                >
                  <div
                    style={{
                      width: "25rem",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Button
                      type="skip"
                      className="footer-btn footer-btn-secondary small"
                      onClick={this.handleSkip}
                    >
                      تخطي
                    </Button>
                  </div>
                  <Button
                    type="next"
                    className="footer-btn footer-btn-primary small"
                    onClick={this.handleNext}
                    disabled={!this.state.text}
                  >
                    التالي
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}

export default Match;
