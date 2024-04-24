import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserFail, UserRequest, UserSuc } from "./action/userAction";

export const UserReducer1 = () => {
  const data = useSelector(y => y.user);
  const dis = useDispatch();

  useEffect(() => {
    dis(UserRequest());

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((y) => y.json())
      .then((y) => {
        dis(UserSuc(y));
      })
      .catch((y) => {
        dis(UserFail(y));
      });
  }, []);

  console.log(data);


  return <div>UserReducer</div>;
};
