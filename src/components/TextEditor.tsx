import React, { useState } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";

interface TextEditorProps {
  shapeId: string;
}

const TextEditor: React.FC<TextEditorProps> = ({ shapeId }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleKeyCommand = (command: string) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  const onUnderlineClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "UNDERLINE"));
  };

  const onBoldClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  };

  return (
    <div className="text-editor">
      <button onClick={onUnderlineClick}>Underline</button>
      <button onClick={onBoldClick}>Bold</button>
      <Editor
        editorState={editorState}
        handleKeyCommand={handleKeyCommand}
        onChange={setEditorState}
      />
    </div>
  );
};

export default TextEditor;