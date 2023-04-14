import React from "react";
import Card from "./Card";

interface Props {
  input: Array<Exercise>;
}

interface Exercise {
  id: number;
  uuid: number;
  name: string;
  description: string;
}

function SearchCards({ input }: Props) {
  return (
    <>
      {input.map((el: Exercise) => {
        console.log(el);
        return <Card />
      })}
    </>
  );
}

export default SearchCards;
