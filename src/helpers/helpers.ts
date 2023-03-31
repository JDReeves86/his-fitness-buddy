import muscleList from "@/data/muscleTypes";

const findMuscle = (input: string) => {
  console.log(input);
  for (const key in muscleList) {
    const indexedObj = muscleList[key];
    if (indexedObj.name === input) {
      console.log(`match! @ index ${key}`);
    }
  }
};

export { findMuscle };
