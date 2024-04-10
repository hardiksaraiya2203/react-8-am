import React, { useEffect, useState } from "react";
import axios from "axios";

const DisplayDataWithAxios = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((y) => {
      console.log(y);
      setData(y.data);
    });
  }, []);
  return (
    <div>
      {data.map((value, index) => {
        return <div key={index}>{value.title}</div>;
      })}
    </div>
  );
};

export default DisplayDataWithAxios;
