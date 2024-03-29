import React, { useContext } from "react";
import Button from "./button";
import { IoIosAdd } from "react-icons/io";
import { JourneyContext } from "../context/journeyContext";

const AddInput = (props) => {
  const { data, inputChange, addIdea } = useContext(JourneyContext);

  const ideaId = () => {
    return "_" + Math.random().toString(36).substr(2, 9);
  };
  return (
    <div className="addIdea">
      <div className="addIdea-content">
        <textarea
          value={data.inputText}
          placeholder="اكتب فكرتك..."
          className="addIdea-input"
          rows={1}
          onChange={(e) => inputChange(e.target.value)}
        />
        <div className="addIdea-wrapperbtn">
          <Button
            onClick={() => addIdea(ideaId())}
            type="add"
            className="addIdea-btn"
            disabled={!data.inputText.length}
          >
            <IoIosAdd size={40} color="white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddInput;
