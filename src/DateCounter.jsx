import React, { useState } from "react";

export const DateUp = () => {
  let a = new Date();
  let b = a.getDate();
  let c = a.getMonth();
  let d = a.getFullYear();

  let [date, changeDate] = useState(b);
  let [month, changeMonth] = useState(c);
  let [year, changeYear] = useState(d);

  const handleDate = () => {
    if (date <= 30) {
      changeDate(date + 1);
    }
    if (date > 30) {
      changeMonth(month + 1);
      changeDate((date = 1));
    }
    if (month > 2) {
      changeMonth((month = 1));
      changeDate((date = 1));
      changeYear(year + 1);
    }
    // else {
    //   console.log(c);
    //   changeIt((date = 1));
    // }
  };
  return (
    <>
      <div>
        {date}:{month}:{year}
      </div>
      <button onClick={handleDate}>+</button>
    </>
  );
};
