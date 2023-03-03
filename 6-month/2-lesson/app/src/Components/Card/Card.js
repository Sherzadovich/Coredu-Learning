import React from "react";
import { Link, useParam, useNavigate } from "react-router-dom";

export default function Card({ id, title, text }) {
  const param = useParam();
  const navigate = useNavigate();
  console.log(navigate);

  const handleClick = () => {
    alert("Clicked");
    navigate("/");
  };
  return (
    <div>
      <h2>{title}</h2>
      <p>{text}...</p>
      {param.id ? (
        <button onclick={handleClick}>Back</button>
      ) : (
        <Link to={`/posts/${id}`}>Read more</Link>
      )}
    </div>
  );
}
