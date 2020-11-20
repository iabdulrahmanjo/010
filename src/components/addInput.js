import React from "react";
import Button from "./button";
import { IoIosAdd } from "react-icons/io";

const AddInput = (props) => {
  return (
    <div className="addIdea">
      <textarea
        placeholder="اكتب فكرتك..."
        className="addIdea-input"
        rows={1}
      />
      <div className="addIdea-wrapperbtn">
        <Button type="add" className="addIdea-btn">
          <IoIosAdd size={40} color="white" />
        </Button>
      </div>
    </div>
  );
};

export default AddInput;
