import React, { useContext } from "react";
import NameContext from "../context/NameContext";

export default function List() {
  let { name } = useContext(NameContext);

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        width: "300px",
        margin: "0 auto",
        marginTop: "30px",
      }}
    >
      {name}
    </div>
  );
}
