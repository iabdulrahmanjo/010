import React from "react";
import trophy from "../icons/trophy.png";
import styled, { keyframes } from "styled-components";
import { tada, fadeIn } from "react-animations";
import Confetti from "react-dom-confetti";
import { JourneyContext } from "../context/journeyContext";

const tadaAnimation = keyframes`${tada}`;

const TadaDiv = styled.div`
  animation: 1s ${tadaAnimation};
`;

const FadeInAnimation = keyframes`${fadeIn}`;
const FadeIn = styled.div`
  animation: 0.2s ${FadeInAnimation};
`;

const config = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};

class FinishMessage extends React.Component {
  static contextType = JourneyContext;
  state = {
    active: false,
  };

  componentDidMount() {
    this.setState({ active: true });
  }

  render() {
    return (
      <FadeIn>
        <div className="finishMessage">
          <Confetti active={this.state.active} config={config} />
          <TadaDiv>
            <div className="finishMessage-icon animate__animated animate__tada">
              <img src={trophy} alt="trophy" />
            </div>
          </TadaDiv>
          {/* <FadeInDiv> */}
          <div className="finishMessage-text">
            <p>! أحسنت</p>
          </div>
          {/* </FadeInDiv> */}
          <div className="finishMessage-parg">
            لقد تمكنت من كتابة
            <span>{this.context.data.ideasCount}</span>
            فكرة
          </div>
        </div>
      </FadeIn>
    );
  }
}

export default FinishMessage;
