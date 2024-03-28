import React, { useEffect, useState } from "react";
import { data } from "./JSON";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ShowBirthday = () => {
  let [value, clearValue] = useState(data);

  const handleData = () => {
    clearValue(value);
    // let p = [...value]
    // p.splice(0) 
    // ||
    clearValue([]);

    console.log(value);
  };
  return (
    <div>
      {data.map((value, index) => {
        return (
          <div key={index}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={value.image} />
              <Card.Body>
                <Card.Title>{value.id}</Card.Title>
                <Card.Text>{value.name}</Card.Text>
                <Card.Text>{value.age}</Card.Text>
              </Card.Body>
            </Card>

            <button onClick={handleData}>Clear All</button>
          </div>
        );
      })}
    </div>
  );
};

export default ShowBirthday;
