import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return; // ⬅️ Prevent empty API calls

    fetch(`https://api.exchangerate.host/latest?base=${currency.toUpperCase()}`)
      .then((res) => res.json())
      .then((res) => {
        console.log("Full API response:", res); // Debug response
        if (res && res.rates) {
          setData(res.rates);
        } else {
          console.error("API response missing rates or invalid base currency");
          setData({});
        }
      })
      .catch((err) => {
        console.error("API Error:", err);
        setData({});
      });
  }, [currency]);

  console.log("Currency data:", data); // Line 23
  return data;
}

export default useCurrencyInfo;
