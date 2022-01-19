import { useState, useEffect } from "react";
import Words from "./components/Words";
import InputWord from "./components/InputWord";

function App() {
  const [words, setWords] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const wordsPerPage = 10;

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const onNewWordEntered = async (text) => {
    const res = await fetch(`https://api.datamuse.com/words?rel_rhy=${text}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await res.json();

    setCurrentPage(1);
    setWords(data.map((item) => item.word));
  };

  // Logic for displaying words
  const indexOfLastWord = currentPage * wordsPerPage;
  const indexOfFirstWord = indexOfLastWord - wordsPerPage;
  const currentWords = words.slice(indexOfFirstWord, indexOfLastWord);

  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(words.length / wordsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    let className = "page-item page-link";
    if (number === currentPage) {
      className += " bg-primary text-light";
    }
    return (
      <li className={className} key={number} id={number} onClick={handleClick}>
        {number}
      </li>
    );
  });

  return (
    <>
      <div className="container">
        <InputWord onNewWordEntered={onNewWordEntered} />

        {words.length > 0 ? <hr></hr> : null}
        {words.length > 0 ? (
          <nav
            aria-label="Page navigation example"
            className="d-flex justify-content-center mt-3"
          >
            <ul className="pagination" id="page-numbers">
              {renderPageNumbers}
            </ul>
          </nav>
        ) : null}
        {words.length > 0 ? <Words words={currentWords} /> : null}
      </div>
    </>
  );
}

export default App;
