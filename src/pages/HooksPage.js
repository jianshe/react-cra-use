import React, { useState, useEffect } from "react";
import FruitList from "../components/FruitList";
import FruitAdd from "../components/FruitAdd";

export default function HooksPage() {
  const [counter, setCounter] = useState(0);
  const [fruits, setFruits] = useState(["apple", "banana"]);
  return (
    <div>
      <h1>HooksPage</h1>
      {/* <p>{date.toLocaleTimeString()}</p> */}
      <div onClick={() => setCounter(counter + 1)}>{counter}</div>
      <FruitAdd addFruit={name => setFruits([...fruits, name])} />
      <FruitList fruits={fruits} setFruits={setFruits} />
    </div>
  );
}
//自定义Hook
function useClock() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    console.log("useEffect");
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return date;
}
