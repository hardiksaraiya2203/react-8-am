import React from "react";

const GroceryItems = (props) => {

  console.log(props)
  return (
  <div>
    {
      props.data.map((value,index)=>{
        return (<div key={index}>{value} <button>Edit</button><button>Delete</button></div>)
      })
    }
  </div>
)
};

export default React.memo(GroceryItems);
