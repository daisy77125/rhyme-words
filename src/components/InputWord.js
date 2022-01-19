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
      <div className="form-control">
        <input
          type="text"
          placeholder="Enter your word"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <input
        type="submit"
        value="Find words that rhyme with your input"
        className="btn btn-block"
      />
    </form>
  );
};

export default InputWord;
