export interface ISearchFilter {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  filterSpecies: string;
  setFilterSpecies: (value: string) => void;
  filterStatus: string;
  setFilterStatus: (value: string) => void;
  filterGender: string;
  setFilterGender: (value: string) => void;
  sortOrder: string;
  setSortOrder: (value: string) => void;
}
