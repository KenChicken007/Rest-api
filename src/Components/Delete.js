import { useState, useEffect } from "react";

export default function Delete() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const deletePost = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.status === 200) {
        setPosts(
          posts.filter((post) => {
            return post.id !== id;
          })
        );
      } else {
        return;
      }
    });
  };

  return (
    <div className="post-container">
      {posts.map((post) => {
        return (
          <div className="post-card" key={post.id}>
            <div className="button">
              <div className="delete-btn" onClick={() => deletePost(post.id)}>
                Delete
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
