export interface IButton {
    page: number;
    setPage: (page: number) => void;
    maxPage?: number; // maxPage es opcional
  }