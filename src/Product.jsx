import React, { useEffect, useState } from "react";
import axios  from "axios";
import ProductItem from "./ProductItem";

const Product = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((y) => {
      setData(y.data);
    });
  }, []);
  return (
    <div>
      {data.map((value, index) => {
        return <ProductItem item={value} index={index} />;
      })}
    </div>
  );
};

export default Product;
