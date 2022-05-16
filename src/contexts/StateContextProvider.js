import React from "react";
const StateContext = createStateContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const StateContextProvider = ({ children }) => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const getResults = async () => {
    setLoading(true);
    const response = await fetch(`${baseUrl}/search?q=${searchTerm}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "e9a9f6e9a1msh5b5f8f8b5c8e5f5p1e5d8ejsn9b9c5f7d5d5c",
      },
    });
    const data = await response.json();
    setResult(data.results);
    setLoading(false);
  };
  return;
  <StateContext.Provider
    value={{ result, loading, getResults, searchTerm, setSearchTerm }}
  >
    {children}
  </StateContext.Provider>;
};
