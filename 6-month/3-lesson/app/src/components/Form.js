import React, { useContext } from "react";
import NameContext from "../context/NameContext";

export default function Form() {
  const { addUser } = useContext(NameContext);

  return (
    <div>
      <form onSubmit={addUser}>
        <input type="text" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
