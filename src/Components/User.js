import { useState } from "react";

const User = (props) => {
  const [counter] = useState(0);
  return (
    <div className="user-card">
      <h1>Counter:{counter}</h1>
      <h1>Name: {props.name}</h1>
      <h2>Location: Mumbai</h2>

      <h2>Contact: deepmaurya3440@gmail.com</h2>
    </div>
  );
};

export default User;
