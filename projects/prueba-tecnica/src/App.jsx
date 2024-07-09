import { useEffect, useState } from "react";

const CAT_ENDPOINT_FACT = "https://catfact.ninja/fact";

export function App() {
  const [fact, setFact] = useState();

  useEffect(() => {
    fetch(CAT_ENDPOINT_FACT)
      .then((response) => response.json())
      .then((data) => setFact(data.fact));
  }, []);

  return (
    <main>
      <h1>Cat-App</h1>
      <p>{fact}</p>
    </main>
  );
}
