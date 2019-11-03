import React, { useReducer, useEffect } from "react";
import FruitList from "../components/FruitList";
import FruitAdd from "../components/FruitAdd";

function fruitReducer(state = [], action) {
  switch (action.type) {
    case "replace":
    case "init":
      return [...action.payload];
    case "add":
      return [...state, action.payload];
    default:
      return state;
  }
}

export default function UseReducerPage() {
  const [fruits, dispatch] = useReducer(fruitReducer, []);
  useEffect(() => {
    //effect
    setTimeout(() => {
      dispatch({ type: "init", payload: ["apple", "banana"] });
    }, 1000);
  }, []);
  return (
    <div>
      <h1>UseReducerPage</h1>
      <FruitAdd addFruit={name => dispatch({ type: "add", payload: name })} />
      <FruitList
        fruits={fruits}
        setFruits={newList => dispatch({ type: "replace", payload: newList })}
      />
    </div>
  );
}
