import React from "react";

const GroceryItems = (props) => {
  return (
    <div>
      {props.data.map((value, index) => {
        return (
          <div key={index}>
            {value}
            <button>Edit</button>
            <button
              onClick={() => {
                props.deleteData(index);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(GroceryItems);
