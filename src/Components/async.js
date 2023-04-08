import { useState } from "react";

const async = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState("");

  //GET with fetch API
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        const data = await response.json();
        console.log(data);
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, []);

  //Delete with fetchAPI
  const deletePost = async (id) => {
    try {
      let response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.status === 200) {
        posts.filter((post) => {
          return post.id !== id;
        });
      } else return;
    } catch (error) {
      console.log(error);
    }
  };

  //Post with fetchAPI
  const addposts = async (title, body) => {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          body: body,
          userId: Math.random().toString(36).slice(2),
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      let data = response.json();
      setPosts((posts) => [data, ...posts]);
      setTitle("");
      setBody("");
    } catch (error) {
      console.log(error);
    }
  };
};
