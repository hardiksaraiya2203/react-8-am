import React, { useEffect, useState } from "react";

const ProductDisplay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((y) => y.json())
      .then((y) => {
        setData(y);
      });
  }, []);
  const handleNI = (index) => {
    let p = [...data];
    p.splice(index, 1);
    setData(p);
  };
  return (
    <div>
      {data.map((value, index) => {
        return (
          <div key={index}>
            {value.id}
            {value.id % 2 == 0 && (
              <button
                onClick={() => {
                  handleNI(index);
                  console.log(index);
                }}
              >
                NI
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProductDisplay;
