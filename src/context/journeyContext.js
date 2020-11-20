import React, { Component } from "react";
import { getQuestions } from "../utils/_DATA";

const JourneyContext = React.createContext();

class JourneyProvider extends Component {
  state = {
    phase: "choosing product",
    progressPercentage: 0,
    product: null,
    ideas: [],
    questions: [],
    questionCounter: 0,
    finished: false,
  };

  ChangeOfPhase = () => {
    const progressStep = 100 / 11;
    this.setState((prevState) => ({
      phase: "answering Q",
      progressPercentage: prevState.progressPercentage + progressStep,
      questions: getQuestions(),
    }));
  };

  selectProduct = (product) => {
    this.setState({ product });
  };

  render() {
    return (
      <JourneyContext.Provider
        value={{
          data: this.state,
          nextPhase: this.ChangeOfPhase,
          selectProduct: this.selectProduct,
        }}
      >
        {this.props.children}
      </JourneyContext.Provider>
    );
  }
}

export { JourneyProvider, JourneyContext };
