import s from "./SearchBar.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";

export const SearchBar = ({ onSearch, searchText = "" }) => {
  return (
      <input
        placeholder="Search an album of your choice"
        // value={searchText}
        onChange={onSearch}
        type="search"
        className={s.search_input}
      />

  );
};
