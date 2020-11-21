import React, { useContext } from "react";
import Button from "../components/button";
import { JourneyContext } from "../context/journeyContext";

const Footer = (props) => {
  const {
    data,
    nextPhase,
    nextQuestion,
    skipQuestion,
    backQuestion,
  } = useContext(JourneyContext);

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
      ) : (
        <div className="footer">
          <Button
            type="next"
            className="footer-btn footer-btn-primary"
            onClick={nextQuestion}
            disabled={!data.ideas[data.questionCounter].length > 0}
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
      )}
    </div>
  );
};

export default Footer;
