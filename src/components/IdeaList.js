import React, { useContext, useState } from "react";
import { JourneyContext } from "../context/journeyContext";
import { MdDelete } from "react-icons/md";
// import { Editor, EditorState, ContentState } from "draft-js";
import "draft-js/dist/Draft.css";

const Idea = (props) => {
  const { deleteIdea } = useContext(JourneyContext);
  console.log(props.text);

  return (
    <div className="idea">
      <div className="idea-text">{props.text[1]}</div>
      {props.type === "delete" && (
        <div className="idea-iconContainer">
          <MdDelete
            className="idea-icon"
            onClick={() => deleteIdea(props.text[0])}
          />
        </div>
      )}
    </div>
  );
};
// class IdeaEditor extends React.Component {
//   static contextType = JourneyContext;
//   state = {
//     editorState: EditorState.createWithContent(
//       ContentState.createFromText(this.props.text)
//     ),
//   };

//   onChange = (editorState) => {
//     this.setState({
//       editorState,
//     });

//     this.context.updateIdea(
//       this.props.index,
//       editorState.getCurrentContent().getPlainText()
//     );
//   };

//   render() {
//     return (
//       <div className="idea">
//         <Editor editorState={this.state.editorState} onChange={this.onChange} />
//         <MdDelete className="idea-icon" />
//       </div>
//     );
//   }
// }

const IdeaList = (props) => {
  const { data } = useContext(JourneyContext);
  return (
    <div className="ideaList">
      {Object.entries(data.ideas[data.questions[data.questionCounter]])
        .reverse()
        .map((idea, index) => (
          <Idea key={index} text={idea} type="delete" />
        ))}
    </div>
  );
};

export { IdeaList, Idea };
