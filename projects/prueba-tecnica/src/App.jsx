import "./styles/app.scss";
import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";
import { Cat } from "./components/Cat";

export function App() {
  const { fact, refreshFact } = useCatFact("");
  const { imageUrl } = useCatImage({ fact });

  return (
    <main>
      <section className="l-info">
        <h1>Cat-App</h1>
        <button className="btn-newCat" onClick={refreshFact}>
          <strong>Get New</strong>
        </button>
      </section>
      <section className="l-page">
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
        <Cat></Cat>
        <Cat></Cat>
        <Cat></Cat>
      </section>
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
