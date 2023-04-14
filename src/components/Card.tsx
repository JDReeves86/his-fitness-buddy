import React from "react";
import styles from "@/styles/Home.module.css";

interface Props {
  input: Exercise;
}

interface Exercise {
  id: number;
  uuid: number;
  name: string;
  description: string;
}

function Card({ input }: Props) {
  console.log(input)
  return (
    <div className={styles.resultCard}>
      <p>{input.name}</p>
    </div>
  );
}

export default Card;
