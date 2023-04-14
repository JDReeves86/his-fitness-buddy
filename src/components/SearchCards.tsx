import React from "react";
import Card from "./Card";

interface Props {
  input: Exercise[];
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
        return <Card input={el}/>
      })}
    </>
  );
}

export default SearchCards;
