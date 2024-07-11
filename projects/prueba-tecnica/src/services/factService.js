const CAT_ENDPOINT_FACT = "https://catfact.ninja/fact";

export const getRandomFact = async () => {
    const response = await fetch(CAT_ENDPOINT_FACT);
    const data = await response.json();
    console.log({ data })
    const { fact }  = data;
    console.log({ fact })
    return fact;
}