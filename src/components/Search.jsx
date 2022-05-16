import React, { useState, useEffect } from "react";

import { useDebounce } from "use-debounce";
import { useStateContext } from "../../../project_google_clone/src/contexts/StateContextProvider";

import { Links } from "./Links";
export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);
  const { setSearchTerm: setSearchTermContext } = useStateContext();

  useEffect(() => {
    setSearchTermContext(debouncedSearchTerm);
  }, [debouncedSearchTerm, setSearchTermContext]);

  return (
    <div className="flex items-center">
      <input
        className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
        type="text"
        placeholder="Search Google"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Search
      </button>
    </div>
  );
};
