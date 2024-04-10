import React, { useState } from "react";

const LoginWithSelect = () => {
  const [data, setData] = useState({
    contact: "",
    firstName: "",
    lastName: "",
  });
  const [details, setDetails] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setDetails(data.firstName)
  };

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form action="">
        <select name="contact" id="contact" onChange={handleInput}>
          <option value="select" disabled={true}>
            --Select--
          </option>
          <option value="Home">Home</option>
          <option value="Office">Office</option>
        </select>
      </form>

      <br />

      <label htmlFor="firstName">firstName: </label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        onChange={handleInput}
      />

      <br />

      <label htmlFor="lastName">lastName: </label>
      <input type="text" name="lastName" id="lastName" onChange={handleInput} />

      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      {details}
    </div>
  );
};

export default LoginWithSelect;
