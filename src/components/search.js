import React from "react";
import { IoIosSearch } from "react-icons/io";
const Search = (props) => {
  return (
    <div className="search">
      <input
        dir="rtl"
        type="text"
        className="search_input"
        placeholder="يمكنك البحث عن المنتجات هنا"
        onChange={props.handleChange}
      />
      <IoIosSearch className="search-icon" />
    </div>
  );
};

export default Search;
