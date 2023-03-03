import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Posts() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const data = axios.get("https://reqres.in/api/users?page=2");
    data.then((res) => {
      setPosts(res.data);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div style={{ display: "flex", gap: "50px", justifyContent: "center" }}>
      {posts.map((post) => {
        <Card key={post.id} {...post} />;
      })}
    </div>
  );
}
