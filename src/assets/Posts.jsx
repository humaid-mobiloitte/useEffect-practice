import { useState, useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Component Mounted");

    // Fetch data from public API
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();

    // Cleanup function (runs when the component unmounts)
    return () => {console.log("Component Unmounted")}}, []);

  return (
    <div>
      <h2>Posts</h2>
      {loading ? <p>Loading...</p> : (
        <ul>
          {posts.slice(0, 7).map((post) => (
            <li key={post.id}><strong>{post.title}</strong>: {post.body}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Posts;
