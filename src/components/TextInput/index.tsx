import React, { useState } from "react";

interface TextInputProps {
  onAdd: (text: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleAdd = () => {
    onAdd(text);
    setText("");
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TextInput;
