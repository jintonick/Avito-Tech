import React from 'react';
import SearchInput from '../components/search/search-input';
import { useSearch } from '../components/search/search-context';
import { Select, DatePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import countries from './styles/countries.json';
import reset from '../components/imgs/reset.png';
import { NavBarProps } from '../interfaces/pages';
import './styles/navbar.css';

const { RangePicker } = DatePicker;

const NavBar: React.FC<NavBarProps> = ({
  onYearChange,
  onCountryChange,
  onAgeRatingChange,
}) => {
  const { setSearchQuery, filters, resetFilters } = useSearch();
  const { yearFilter, countryFilter, ageRatingFilter } = filters;
  const countryOptions = countries.map((country) => ({
    value: country.slug,
    label: country.name,
  }));
  const ageRatings = ['0+', '6+', '12+', '18+'];
  const ageRatingOptions = ageRatings.map((rating) => ({
    value: rating,
    label: rating,
  }));
  const handleYearChange = (
    dates: [Dayjs | null, Dayjs | null] | null,
    dateStrings: [string, string]
  ) => {
    const startYear = dateStrings[0];
    const endYear = dateStrings[1];
    onYearChange({ start: startYear, end: endYear });
  };
  const handleCountryChange = (countrySlug: string | null) => {
    const countryName = countrySlug
      ? countries.find((country) => country.slug === countrySlug)?.name || null
      : null;
    onCountryChange(countryName);
  };
  const handleRatingChange = (value: string | null) => {
    onAgeRatingChange(value);
  };
  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  return (
    <div className="rounded-[10px] h-[45px] mb-[45px] mt-[30px] flex w-full gap-2.5 items-center justify-between">
      <div className="nav-bar-container">
        <div className="search-container">
          <SearchInput onSearch={handleSearch} />
        </div>
        <div className="filters-container">
          <RangePicker
            picker="year"
            style={{ width: 180, height: 40 }}
            onChange={handleYearChange}
            value={[
              yearFilter.start ? dayjs(yearFilter.start, 'YYYY') : null,
              yearFilter.end ? dayjs(yearFilter.end, 'YYYY') : null,
            ]}
          />
          <Select
            showSearch
            style={{ width: 180, height: 40 }}
            placeholder="Страна"
            onChange={handleCountryChange}
            value={countryFilter}
            filterOption={filterOption}
            options={countryOptions}
          />
          <div className="filterandreset">
            <Select
              showSearch
              style={{ width: 180, height: 40 }}
              placeholder="Возраст"
              onChange={handleRatingChange}
              value={ageRatingFilter}
              options={ageRatingOptions}
            />
            <button onClick={resetFilters} className="filter-item">
              <img src={reset} className="h-[25px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
