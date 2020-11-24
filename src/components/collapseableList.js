import React from "react";
import { Collapse } from "react-collapse";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Idea } from "./IdeaList";

const CollapseableList = ({ question, ideas }) => {
  const [isOpeend, setIsOpened] = React.useState(false);
  console.log(ideas);
  return (
    <div className="collapseableList">
      <div
        className="collapseableList-head"
        onClick={() => setIsOpened(!isOpeend)}
      >
        <div className="collapseableList-head--question">{question}</div>
        {isOpeend ? (
          <IoIosArrowUp className="collapseableList-head--icon" />
        ) : (
          <IoIosArrowDown className="collapseableList-head--icon" />
        )}
      </div>
      <div className="collapseableList-body">
        <Collapse isOpened={isOpeend}>
          {Object.entries(ideas[0]).length > 0 ? (
            Object.entries(ideas[0]).map((idea, index) => (
              <Idea key={index} text={idea} type="noDelete" />
            ))
          ) : (
            <p
              style={{
                fontSize: "1.5rem",
                textAlign: "center",
                padding: "1rem",
                color: "gray",
              }}
            >
              لم تكتب اي فكرة
            </p>
          )}
        </Collapse>
      </div>
    </div>
  );
};

export default CollapseableList;
