import React, { createContext, useState, useContext } from 'react';
import {
  FilterState,
  SearchResults,
  SearchContextProps,
} from '../../interfaces/components';

const SearchContext = createContext<SearchContextProps>({
  currentPage: 1,
  setCurrentPage: () => {},
  searchQuery: '',
  setSearchQuery: () => {},
  searchResults: null,
  setSearchResults: () => {},
  filters: {
    yearFilter: {},
    countryFilter: null,
    ageRatingFilter: null,
  },
  setFilters: () => {},
  resetFilters: () => {},
  updateHistory: () => {},
  suggestions: [],
  setSuggestions: () => {},
});

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResultsState] = useState<SearchResults | null>(
    null,
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [history, setHistory] = useState<string[]>(() => {
    const saved = localStorage.getItem('searchHistory');
    return saved ? JSON.parse(saved) : [];
  });
  const [filters, setFilters] = useState<FilterState>({
    yearFilter: {},
    countryFilter: null,
    ageRatingFilter: null,
  });
  const updateHistory = (query: string) => {
    if (query && !history.includes(query)) {
      const updatedHistory = [query, ...history].slice(0, 20);
      setHistory(updatedHistory);
      localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
    }
  };
  const resetFilters = () => {
    setFilters({
      yearFilter: {},
      countryFilter: null,
      ageRatingFilter: null,
    });
    setSearchQuery('');
    setCurrentPage(1);
  };
  const setSearchResults = (results: SearchResults) => {
    setSearchResultsState(results);
  };
  return (
    <SearchContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        searchQuery,
        setSearchQuery,
        searchResults,
        setSearchResults,
        filters,
        setFilters,
        resetFilters,
        updateHistory,
        suggestions,
        setSuggestions,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
