import React, { useState } from "react";

const Counter = () => {
  let [value, setValue] = useState(0);
  let [date, setDate] = useState(1);

  const updateDate = () => {
    if (date > 4) {
      setDate(date = 1);
    } else {
      setDate(date + 1);
      console.log(date);
    }
  };

 

  const handleCounter = () => {
    setValue(value + 1);
  };
  return (
    <>
      <div onClick={handleCounter}>{value}</div>
      <div>{date}</div>
      <button onClick={updateDate}>+</button>
    </>
  );
};

export default Counter;
