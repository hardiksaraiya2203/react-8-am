import React, { useState } from "react";
import GroceryItems from "./GroceryItems";

const Grocery = () => {
  const [data, setData] = useState([]);
  const [inp, setInp] = useState("");
  const [index,setIndex] = useState(0)

  const handleChange = (e) => {
    e.preventDefault();
    setInp(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    let p = [...data];
    p.push(inp);
    setData(p);
  };

  const deleteData = (index) =>{
    let p = [...data]
    p.splice(index,1)
    setData(p)
    alert("aaaaaaaaa")
  }

  return (
    <div>
      <input type="text" name="item" onChange={handleChange} />

      <input type="submit" value="Save" onClick={handleClick} />

      <GroceryItems data={data} deleteData={deleteData}/>
    </div>
  );
};

export default Grocery;
