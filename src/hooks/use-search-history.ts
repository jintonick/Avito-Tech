import { useState, useEffect } from "react";
import { debounce } from "lodash";

const useSearchHistory = (initialQuery = "") => {
  const [query, setQuery] = useState(initialQuery);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [history, setHistory] = useState<string[]>(() => {
    const saved = localStorage.getItem("searchHistory");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("searchHistory", JSON.stringify(history));
  }, [history]);
  const updateHistory = (newQuery: string) => {
    if (newQuery && !history.includes(newQuery)) {
      const updatedHistory = [newQuery, ...history].slice(0, 20);
      setHistory(updatedHistory);
    }
  };
  const updateSuggestions = (input: string) => {
    const filteredSuggestions = history.filter((item) =>
      item.toLowerCase().includes(input.toLowerCase()),
    );
    setSuggestions(filteredSuggestions);
  };
  const debouncedUpdateSuggestions = debounce(updateSuggestions, 1000);
  const handleInputChange = (inputValue: string) => {
    setQuery(inputValue);
    debouncedUpdateSuggestions(inputValue);
  };

  return { query, handleInputChange, suggestions, updateHistory };
};

export default useSearchHistory;
