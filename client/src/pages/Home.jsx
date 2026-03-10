import { useState, useEffect } from "react";
import { getPosts } from "../api";
import LoadingSpinner from "../components/LoadingSpinner";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPosts()
      .then((data) => setPosts(data || []))
      .catch(() => setError("Failed to load posts."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ padding: "1rem 2rem" }}>
      <h1 className="red-bordered-heading">
        Welcome to DevStations E-Learning Platform
      </h1>

      {loading && <LoadingSpinner />}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && posts.length === 0 && <p>No posts yet.</p>}

      {posts.map((post) => (
        <div
          key={post.id}
          style={{ borderBottom: "1px solid #ddd", padding: "1rem 0" }}
        >
          <h2 style={{ margin: "0 0 0.25rem" }}>{post.title}</h2>
          <p style={{ margin: 0, color: "#555" }}>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
