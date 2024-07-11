import { useEffect, useState } from "react";
import "./styles/app.scss";
import { getRandomFact } from "./services/factService";

export function App() {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    getNewCatAndFact();
  }, []);

  const getNewCatAndFact = async () => {
    try {
      const randomFact = await getRandomFact();
      setFact(randomFact);

      const firstWord = randomFact.split(" ")[0];

      const imageUrl = `https://cataas.com/cat/says/${firstWord}?fontSize=46&fontColor=blue`;
      setImageUrl(imageUrl);
    } catch (error) {
      console.error("Error while getting cat info", error);
    }
  };

  return (
    <main className="l-page">
      <h1>Cat-App</h1>
      <div className="c-cat">
        {fact && <p className="c-cat__fact">{fact}</p>}
        {imageUrl && (
          <img
            className="c-cat__img"
            src={imageUrl}
            alt={`Image extracted from the first word of ${fact}`}
          />
        )}
      </div>
      <button className="btn-newCat" onClick={getNewCatAndFact}>
        <strong>Get New</strong>
      </button>
    </main>
  );
}

// useEffect(() => {
//   fetch(CAT_ENDPOINT_FACT)
//     .then((response) => response.json())
//     .then((data) => {
//       const { fact } = data;
//       console.log({ fact });
//       setFact(fact);
//       const firstWord = fact.split(" ")[0];

//       const imageUrl = `https://cataas.com/cat/says/${firstWord}?fontSize=42&fontColor=blue`;
//       setImageUrl(imageUrl);
//     });
// }, []);
