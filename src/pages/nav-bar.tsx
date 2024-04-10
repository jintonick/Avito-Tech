import React from 'react';
import SearchInput from '../components/search-input';
import { Select } from 'antd';

export default function NavBar() {
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log('search:', value);
  };
  const filterOption = (
    input: string,
    option?: { label: string; value: string },
  ) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
  const handleSearch = (query: string) => {
    console.log('Поиск по запросу:', query);
    // Добавьте здесь логику поиска
  };
  const options = [
    { value: 'jack', label: 'Jack' },
    { value: 'lucy', label: 'Lucy' },
    { value: 'tom', label: 'Tom' },
  ];

  return (
    <div className="rounded-[10px] h-[45px] mb-[20px] flex w-full gap-2.5 items-center justify-between px-3">
      <div className="border-[2px] border-[#ff5500] rounded-[10px] px-[10px] py-[4px] w-full flex items-center justify-between">
        <SearchInput onSearch={handleSearch} />
        <Select
          showSearch
          style={{ width: 150, height: 45, fontSize: 'medium' }}
          placeholder="Год"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={filterOption}
          options={options}
        />
        <Select
          showSearch
          style={{ width: 200, height: 45 }}
          placeholder="Страна"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={filterOption}
          options={options}
        />
        <Select
          showSearch
          style={{ width: 200, height: 45 }}
          placeholder="рейтинг"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={filterOption}
          options={options}
        />
      </div>
    </div>
  );
}
