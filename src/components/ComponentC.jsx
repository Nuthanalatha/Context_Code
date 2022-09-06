import React from "react";
import { useContext } from "react"; // or
import contextData from "./ContextApi";
import UserContext from "./contextapi/ContextUser";

const ComponentC = (props) => {
  const dataContext = useContext(contextData); //or React.useContext(contextData);
  const userContext = useContext(UserContext);
  const changeName = () => {
    userContext("Nuthana");
  };

  return (
    <div>
      ComponentC
      <h3>the fname app component is {dataContext}</h3>
      <button onClick={changeName}>Click</button>
    </div>
  );
};

export default ComponentC;
