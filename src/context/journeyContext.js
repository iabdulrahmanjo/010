import React, { Component } from "react";
import { getQuestions, setUpIdeas } from "../utils/_DATA";

const JourneyContext = React.createContext();

class JourneyProvider extends Component {
  state = {
    phase: "choosing-product",
    progressPercentage: 0,
    product: null,
    ideas: {},
    ideasCount: 0,
    questions: [],
    questionCounter: 0,
    inputText: "",
    progressStep: 100 / 11,
  };

  reset = () => {
    this.setState({
      phase: "choosing-product",
      progressPercentage: 0,
      product: null,
      ideas: {},
      ideasCount: 0,
      questions: [],
      questionCounter: 0,
      inputText: "",
      progressStep: 100 / 11,
    });
  };
  ChangeOfPhase = (phase) => {
    if (phase === "answering-Q") {
      const questions = getQuestions();
      this.setState((state) => ({
        phase,
        progressPercentage: state.progressPercentage + state.progressStep,
        questions: questions,
        ideas: setUpIdeas(questions),
      }));
    } else {
      this.setState({
        phase,
        progressPercentage:
          this.state.progressPercentage + this.state.progressStep,
      });
    }
  };

  selectProduct = (product) => {
    this.setState({ product });
  };

  nextQuestion = () => {
    if (this.state.questionCounter === 9) {
      this.setState((state) => ({
        phase: "preparing-result",
        questionCounter: state.questionCounter + 1,
        progressPercentage: state.progressPercentage + state.progressStep,
      }));
    } else {
      this.setState((state) => ({
        questionCounter: state.questionCounter + 1,
        progressPercentage: state.progressPercentage + state.progressStep,
      }));
    }
  };

  backQuestion = () => {
    const { questionCounter } = this.state;
    if (questionCounter === 0) {
      this.setState({
        phase: "choosing-product",
        progressPercentage: 0,
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

  addIdea = (ideaNumber) => {
    this.setState(
      ({ questions, questionCounter, inputText, ideas, ideasCount }) => ({
        ideas: {
          ...ideas,
          [questions[questionCounter]]: {
            ...ideas[questions[questionCounter]],
            [ideaNumber]: inputText,
          },
        },
        inputText: "",
        ideasCount: ideasCount + 1,
      })
    );
  };

  deleteIdea = (ideaId) => {
    const { ideas, questionCounter, questions } = this.state;
    const questionIdea = ideas[questions[questionCounter]];
    delete questionIdea[ideaId];
    this.setState(({ ideas, questionCounter, questions, ideasCount }) => ({
      ideas: {
        ...ideas,
        [questions[questionCounter]]: {
          ...questionIdea,
        },
      },
      ideasCount: ideasCount - 1,
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
          deleteIdea: this.deleteIdea,
          reset: this.reset,
        }}
      >
        {this.props.children}
      </JourneyContext.Provider>
    );
  }
}

export { JourneyProvider, JourneyContext };
