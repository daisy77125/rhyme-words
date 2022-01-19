import { useState } from "react";

const InputWord = ({ onNewWordEntered }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please enter a word.");
      return;
    }

    onNewWordEntered(text);

    setText("");
  };

  return (
    <form className="enter-word-form" onSubmit={onSubmit}>
      <input
        className="form-control mb-3"
        type="text"
        placeholder="Enter your word"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        type="submit"
        value="Find words that rhyme with your input"
        className="btn bg-dark text-light"
      />
    </form>
  );
};

export default InputWord;
