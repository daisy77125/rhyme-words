import { useState, useEffect } from "react";
import Words from "./components/Words";
import InputWord from "./components/InputWord";

function App() {
  const [words, setWords] = useState([]);

  const onNewWordEntered = async (text) => {
    const res = await fetch(`https://api.datamuse.com/words?rel_rhy=${text}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await res.json();

    setWords(data.map((item) => item.word));
  };

  return (
    <>
      <div className="container">
        <InputWord onNewWordEntered={onNewWordEntered} />

        {words.length > 0 ? <Words words={words} /> : null}
      </div>
    </>
  );
}

export default App;
