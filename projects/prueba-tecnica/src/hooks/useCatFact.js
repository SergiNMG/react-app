import { useState, useEffect } from "react";
import { getRandomFact } from "../services/factService";

export function useCatFact() {
    const [fact, setFact] = useState("");
  
    const refreshFact = async () => {
      try {
        const fact = await getRandomFact();
        setFact(fact);
      } catch (error) {
        console.error("Error while getting cat info", error);
      }
    };

    useEffect(() => {
        refreshFact();
      }, []);
  
    return { fact, refreshFact };
  };