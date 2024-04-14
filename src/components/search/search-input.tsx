import React, { ChangeEvent, FC } from 'react';
import useSearchHistory from '../../hooks/use-search-history';
import '../../pages/styles/navbar.css';

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
  const handleSuggestionClick = (suggestion: string) => {
    handleInputChange(suggestion);
    onSearch(suggestion);
    updateHistory(suggestion);
  };
  return (
    <div className="flex">
      <input
        type="text"
        value={query}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleInputChange(e.target.value)
        }
        className="input-search"
        placeholder="Введите запрос для поиска"
      />
      {suggestions.length > 0 && (
        <div className="suggestions absolute w-[10%] top-[230px] z-10">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="bg-gray-100 text-black w-full px-[5px] border-t-[1px] cursor-pointer"
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
      <button
        onClick={handleSubmit}
        className="ml-2 border-[2px] h-[41px] flex justify-center items-center border-[#ff5500] rounded-[10px] hover:bg-blue-700 text-white font-bold py-2 px-4"
      >
        Поиск
      </button>
    </div>
  );
};
export default SearchInput;
