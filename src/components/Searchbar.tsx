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
  const sendRequest = (event: any) => {
    const data = event.target.value;
    console.log(`searching for ${data}`);
    findMuscle(data);
  };
  return (
    <div className={styles.btnList}>
      <button
        className={styles.searchBtn}
        value="Pectoralis major"
        onClick={sendRequest}
      >
        Chest
      </button>
      <button
        className={styles.searchBtn}
        value="Latissimus dorsi"
        onClick={sendRequest}
      >
        Back
      </button>
      <button
        className={styles.searchBtn}
        value="Anterior deltoid"
        onClick={sendRequest}
      >
        Shoulders
      </button>
      <button
        className={styles.searchBtn}
        value="Biceps brachii"
        onClick={sendRequest}
      >
        Biceps
      </button>
      <button
        className={styles.searchBtn}
        value="Triceps brachii"
        onClick={sendRequest}
      >
        Triceps
      </button>
      <button
        className={styles.searchBtn}
        value="Quadriceps femoris"
        onClick={sendRequest}
      >
        Quadriceps
      </button>
      <button
        className={styles.searchBtn}
        value="Biceps femoris"
        onClick={sendRequest}
      >
        Hamstrings
      </button>
      <button
        className={styles.searchBtn}
        value="Gluteus maximus"
        onClick={sendRequest}
      >
        Glutes
      </button>
      <button
        className={styles.searchBtn}
        value="Rectus abdominis"
        onClick={sendRequest}
      >
        Abs
      </button>
      <button
        className={styles.searchBtn}
        value={[
          "Gastrocnemius",
          "Gluteus maximus",
          "Quadriceps femoris",
          "Soleus",
        ]}
        onClick={sendRequest}
      >
        Lower Body
      </button>
      <button
        className={styles.searchBtn}
        value={[
          "Gastrocnemius",
          "Gluteus maximus",
          "Quadriceps femoris",
          "Soleus",
        ]}
        onClick={sendRequest}
      >
        Upper Body
      </button>
    </div>
  );
}

export default Searchbar;
