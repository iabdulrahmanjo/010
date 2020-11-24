import React, { useContext } from "react";
import { JourneyContext } from "../context/journeyContext";
import Card from "../components/card";
import Question from "../components/question";
import AddInput from "../components/addInput";
import Hint from "../components/hint";
import { IdeaList } from "../components/IdeaList";
import styled, { keyframes } from "styled-components";
import fadeIn from "react-animations/lib/fade-in";

const FadeInAnimation = keyframes`${fadeIn}`;
const FadeIn = styled.div`
  animation: 0.2s ${FadeInAnimation};
`;

const ProductQuesstions = (props) => {
  const { data } = useContext(JourneyContext);
  return (
    <FadeIn>
      <div className="productQuestions">
        <div className="productQuestions-right">
          <div className="productQuestions-right--card">
            <Card
              product={data.product}
              iconSize={"14rem"}
              nameSize={"1.5rem"}
              className="card"
            />
          </div>
          <div className="productQuestions-right--hint">
            <Hint />
          </div>
        </div>
        <div className="productQuestions-left">
          <Question />
          <AddInput />
          <IdeaList />
        </div>
      </div>
    </FadeIn>
  );
};

export default ProductQuesstions;
