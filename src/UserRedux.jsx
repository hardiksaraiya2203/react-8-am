import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserError, UserReq, UserSuc } from "./aaction/UserAction";

const UserRedux = () => {
  const data = useSelector((y) => y.user);
  const dis = useDispatch();
  console.log(data);

  useEffect(() => {
    dis(UserReq());

    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((y) => y.json())
      .then((y) => {
        dis(UserSuc(y));
      })
      .catch((y) => {
        dis(UserError(y));
      });
  },[]);
  return <div>UserRedux</div>;
};

export default UserRedux;
