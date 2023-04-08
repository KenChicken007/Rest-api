import axios from "axios";
import { useState, useEffect } from "react";

export default function Axios_fetch() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState([]);

  const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
  });

  //GET with axios
  useEffect(() => {
    let fetchPost = async () => {
      let response = await client.get("?_limit=10");
      setPosts(response.data);
      console.log(response.data);
    };
    fetchPost();
  }, []);

  //Delete with axios
  let deletePost = async (id) => {
    await client.delete(`${id}`);
    setPosts(
      posts.filter((post) => {
        return post.id !== id;
      })
    );
  };

  //Post with axios
  let addPosts = async (title, body) => {
    let response = await client.post("", {
      title: title,
      body: body,
      userId: Math.random().toString(36).slice(2),
    });
    setPosts((posts) => [response.data, ...posts]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPosts(title, body);
  };

  return (
    <>
      <label htmlFor="">Name: </label>
      <br />
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <label htmlFor="">Bio: </label>
      <br />
      <textarea
        name=""
        id=""
        value={body}
        cols="30"
        rows="10"
        onChange={(e) => {
          setBody(e.target.value);
        }}
      ></textarea>
      <br />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>

      {posts.map((post) => {
        return (
          <>
            <div
              className="title"
              style={{ fontWeight: "bold", fontSize: "1.2rem" }}
            >
              {post.title}
            </div>
            <div className="id"> {post.id}</div>
            <div className="body">{post.body}</div>
          </>
        );
      })}
      <br />
      <div className="container">
        {posts.map((post) => {
          return (
            <div className="post-id" key={post.id}>
              <button
                onClick={() => {
                  deletePost(post.id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
