"use client";
import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import muscleList from "@/data/muscleTypes";
import { findMuscle } from "@/helpers/helpers";

interface Props {
  action: Function;
}

const baseAPIURL: string = "https://wger.de/api/v2/exercise?language=2&";

function Searchbar({ action }: Props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: any) => {
    const {
      target: { value },
    } = event;
    console.log(value);
    setSearchTerm(value);
  };

  const sendRequest = (data: string) => {
    console.log(`searching for ${data}`);
    findMuscle(data)
  };
  return (
    <>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Enter a search term"
        onChange={handleChange}
      ></input>
      <button
        className={styles.searchBtn}
        onClick={() => {
          sendRequest(searchTerm);
        }}
      >
        Search
      </button>
    </>
  );
}

export default Searchbar;
