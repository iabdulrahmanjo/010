import React, { Component } from "react";
import { getQuestions } from "../utils/_DATA";

const JourneyContext = React.createContext();

class JourneyProvider extends Component {
  state = {
    phase: "choosing-product",
    progressPercentage: 0,
    product: null,
    ideas: {},
    questions: [],
    questionCounter: 0,
    finished: false,
    inputText: "",
    progressStep: 100 / 11,
  };

  ChangeOfPhase = (phase) => {
    this.setState((state) => ({
      phase,
      progressPercentage: state.progressPercentage + state.progressStep,
      questions: getQuestions(),
      ideas: { [state.questionCounter]: [] },
    }));
  };

  selectProduct = (product) => {
    this.setState({ product });
  };

  nextQuestion = () => {
    this.setState((state) => ({
      questionCounter: state.questionCounter + 1,
      progressPercentage: state.progressPercentage + state.progressStep,
      ideas: { ...state.ideas, [state.questionCounter + 1]: [] },
    }));
  };

  backQuestion = () => {
    const { questionCounter } = this.state;
    if (questionCounter === 0) {
      this.setState({
        phase: "choosing-product",
        progressPercentage: 0,
        questions: [],
      });
    } else {
      this.setState((state) => ({
        questionCounter: state.questionCounter - 1,
        progressPercentage: state.progressPercentage - state.progressStep,
      }));
    }
  };

  inputChange = (text) => {
    this.setState({ inputText: text });
  };

  addIdea = () => {
    this.setState((state) => ({
      ideas: {
        ...state.ideas,
        [state.questionCounter]: [
          ...state.ideas[state.questionCounter],
          state.inputText,
        ],
      },
      inputText: "",
    }));
  };

  render() {
    return (
      <JourneyContext.Provider
        value={{
          data: this.state,
          nextPhase: this.ChangeOfPhase,
          selectProduct: this.selectProduct,
          nextQuestion: this.nextQuestion,
          backQuestion: this.backQuestion,
          inputChange: this.inputChange,
          addIdea: this.addIdea,
        }}
      >
        {this.props.children}
      </JourneyContext.Provider>
    );
  }
}

export { JourneyProvider, JourneyContext };
