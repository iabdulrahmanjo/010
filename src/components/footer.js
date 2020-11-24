import React, { useContext } from "react";
import Button from "../components/button";
import { JourneyContext } from "../context/journeyContext";

const Footer = (props) => {
  const { data, nextPhase, nextQuestion, backQuestion } = useContext(
    JourneyContext
  );

  if (data.phase !== "result") {
    return (
      <div className="wrapper">
        {data.phase === "choosing-product" ? (
          <div className="footer">
            <Button
              type="next"
              className="footer-btn footer-btn-primary"
              onClick={() => nextPhase("answering-Q")}
              disabled={!data.product}
            >
              التالي
            </Button>
          </div>
        ) : data.phase === "answering-Q" ? (
          <div className="footer">
            <Button
              type="next"
              className="footer-btn footer-btn-primary"
              onClick={nextQuestion}
              disabled={
                !Object.keys(data.ideas[data.questions[data.questionCounter]])
                  .length > 0
              }
            >
              التالي
            </Button>
            <Button
              type="skip"
              className="footer-btn footer-btn-secondary"
              onClick={nextQuestion}
            >
              تخطي السؤال
            </Button>
            <Button
              type="back"
              className="footer-btn footer-btn-tertiary"
              onClick={backQuestion}
            >
              السابق
            </Button>
          </div>
        ) : (
          <div className="footer">
            <Button
              type="next"
              className="footer-btn footer-btn-result"
              onClick={() => nextPhase("result")}
            >
              عرض الأفكار
            </Button>
          </div>
        )}
      </div>
    );
  }
  return null;
};

export default Footer;
