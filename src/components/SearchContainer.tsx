import React, { useState } from "react";
import Card from "./Card";
import Searchbar from "./Searchbar";
import SearchCards from "./SearchCards";
import styles from "@/styles/Home.module.css";

function SearchContainer() {
  const [results, setResults] = useState([])
  
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBar}>
        <Searchbar action={setResults}/>
      </div>
      <div className={styles.searchResults}>
        <SearchCards input={results}/>
      </div>
    </div>
  );
}

export default SearchContainer;
