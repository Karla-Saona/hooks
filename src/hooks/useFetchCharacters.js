import { useState, useEffect } from "react";

function useFetchCharacters(url) { //custom hook

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, [url]);

  return data;
}

export default useFetchCharacters;