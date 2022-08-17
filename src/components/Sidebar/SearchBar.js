import React, { useState, useEffect} from "react";
import SearchIcon from "../../assets/search_icon.png"
 
const SearchBar = () => {

  return (
    <div className="search_bar">
      <form className="search_form" action="">
        <input type="search" name="searchbox" id="searchbox" placeholder="Search City" maxLength="50" required/>
        <button type="submit" className="searchbutton">
          <img src={SearchIcon} alt="Search Icon"/>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;