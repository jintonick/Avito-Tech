import React, { ChangeEvent, FC } from 'react';
import useSearchHistory from '../hooks/use-search-history';

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({ onSearch }) => {
  const { query, handleInputChange, suggestions, updateHistory } =
    useSearchHistory();

  const handleSubmit = () => {
    onSearch(query);
    updateHistory(query);
  };

  return (
    <div className="search-input">
      <input
        type="text"
        value={query}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleInputChange(e.target.value)
        }
        className="flex-grow p-2 rounded-[5px] border-none w-[500px] text-black"
        placeholder="Введите запрос для поиска"
      />
      {suggestions.length > 0 && (
        <div className="suggestions">
          {suggestions.map((suggestion, index) => (
            <div key={index} className="suggestion-item">
              {suggestion}
            </div>
          ))}
        </div>
      )}
      <button
        onClick={handleSubmit}
        className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Поиск
      </button>
    </div>
  );
};

export default SearchInput;
