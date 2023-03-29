import React from "react";
import Card from "./Card";
import Searchbar from "./Searchbar";
import styles from "@/styles/Home.module.css";

function SearchContainer() {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBar}>
        <Searchbar />
      </div>
      <div className={styles.searchResults}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default SearchContainer;
