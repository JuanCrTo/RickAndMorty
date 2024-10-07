import React, { ChangeEvent } from "react";
import { Select, Space, Input } from "antd";
import { ISearchFilter } from "@/interfaces/SearchFilter.interface";
import styles from "@/styles/searchFilter.module.scss";

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

  return (
    <div className={styles.searchFilterContainer}>
      <Input
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
      />
      <Space>
        <Select
          className={styles.selectBlue}
          value={filterSpecies}
          onChange={setFilterSpecies}
          allowClear
          options={[
            { value: "", label: "Species" },
            { value: "Human", label: "Human" },
            { value: "Alien", label: "Alien" },
          ]}
        />
        <Select
          className={styles.selectBlue}
          value={filterStatus}
          onChange={setFilterStatus}
          allowClear
          options={[
            { value: "", label: "Status" },
            { value: "Alive", label: "Alive" },
            { value: "Dead", label: "Dead" },
          ]}
        />
        <Select
          className={styles.selectBlue}
          value={filterGender}
          onChange={setFilterGender}
          allowClear
          options={[
            { value: "", label: "Gender" },
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" },
          ]}
        />
        <Select
          className={styles.selectBlue}
          value={sortOrder}
          onChange={setSortOrder}
          allowClear
          options={[
            { value: "", label: "Sort Order" },
            { value: "asc", label: "Ascending" },
            { value: "desc", label: "Descending" },
          ]}
        />
      </Space>
    </div>
  );
};

export default SearchFilter;