import { useEffect, useState } from "react";

function useCurrency(currency) {
  const [data, setData] = useState(null); // Initial state null

  useEffect(() => {
    if (!currency) return; // Check if currency exists

    fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((jsonData) => setData(jsonData[currency])) // Access property dynamically
      .catch((error) => {
        console.error("Error fetching currency data:", error);
      });
  }, [currency]);

  return data;
}

export default useCurrency;
