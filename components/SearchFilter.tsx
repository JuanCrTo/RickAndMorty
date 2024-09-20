import React, { ChangeEvent } from "react";
import { Select, Space, Input } from "antd";
import { ISearchFilter } from "@/interfaces/SearchFilter.interface";


const SearchFilter: React.FC<ISearchFilter> = ({
  searchTerm,
  setSearchTerm,
  filterSpecies,
  setFilterSpecies,
  filterStatus,
  setFilterStatus,
  filterGender,
  setFilterGender,
  sortOrder,
  setSortOrder,
}) => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterSpecies = (value: string) => {
    setFilterSpecies(value);
  };

  const handleFilterStatus = (value: string) => {
    setFilterStatus(value);
  };

  const handleFilterGender = (value: string) => {
    setFilterGender(value);
  };

  const handleSortOrder = (value: string) => {
    setSortOrder(value);
  };

  return (
    <div className="search-filter-container">
      <Input
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
        style={{ width: 300,
          color: '#2453eb',
          fontWeight: 'bold',
         }}
      />
      <Space wrap>
        <Select
          value={filterSpecies}
          onChange={handleFilterSpecies}
          style={{ width: 120 }}
          allowClear
          options={[
            { value: "", label: "Species" },
            { value: "Human", label: "Human" },
            { value: "Alien", label: "Alien" },
          ]}
        />
        <Select
          value={filterStatus}
          onChange={handleFilterStatus}
          style={{ width: 120 }}
          allowClear
          options={[
            { value: "", label: "Status" },
            { value: "Alive", label: "Alive" },
            { value: "Dead", label: "Dead" },
          ]}
        />
        <Select
          value={filterGender}
          onChange={handleFilterGender}
          style={{ width: 120 }}
          allowClear
          options={[
            { value: "", label: "Gender" },
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" },
          ]}
        />
        <Select
          value={sortOrder}
          onChange={handleSortOrder}
          style={{ width: 120 }}
          allowClear
          options={[
            { value: "", label: "Name" },
            { value: "asc", label: "Ascending" },
            { value: "desc", label: "Descending" },
          ]}
        />
      </Space>
    </div>
  );
};

export default SearchFilter;
