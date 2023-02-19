import React, {useState} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const Write = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <input type="text" placeholder="Title" />
      <div className="editor">
        <ReactQuill theme="snow" value={value} onChange={setValue} />
      </div>
    </div>
  );
};