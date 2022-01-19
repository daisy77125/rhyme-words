import Word from "./Word";

const Words = ({ words }) => {
  return (
    <>
      {words.map((word, index) => (
        <Word key={index} word={word} />
      ))}
    </>
  );
};

export default Words;
