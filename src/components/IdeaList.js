import React, { useContext } from "react";
import { JourneyContext } from "../context/journeyContext";
import { MdDelete } from "react-icons/md";

const Idea = ({ text }) => {
  return (
    <div className="idea">
      <input type="text" className="idea-input" value={text} />
      <MdDelete className="idea-icon" />
    </div>
  );
};

const IdeaList = (props) => {
  const { data } = useContext(JourneyContext);
  return (
    <div className="ideaList">
      {data.ideas[data.questionCounter].map((idea) => (
        <Idea text={idea} />
      ))}
    </div>
  );
};

export default IdeaList;
