import { useState, useEffect } from "react";

export default function PostAPI() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addPosts = async (title, body) => {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userID: Math.random().toString(36).slice(2),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts((posts) => [data, ...posts]);
        setTitle(title);
        setBody(body);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPosts(title, body);
  };

  return (
    <div className="app">
      <div className="add-post-container">
        <label>Name: </label>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <label>Detail: </label>
          <br />
          <textarea
            name=""
            id=""
            cols="20"
            rows="8"
            className="form-control"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <br />
          <button type="submit">Add Post</button>
        </form>
      </div>
      {/* ... */}
    </div>
  );
}
