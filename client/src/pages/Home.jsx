import { useState, useEffect } from "react";
import { getPosts } from "../api";

function Home() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const perPage = 10;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getPosts(page)
      .then((data) => {
        setPosts(data.posts);
        setTotalPages(data.total_pages);
        setTotal(data.total);
      })
      .catch(() => setError("Failed to load posts."))
      .finally(() => setLoading(false));
  }, [page]);

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h1 className="red-bordered-heading">
        Welcome to DevStations E-Learning Platform
      </h1>

      <h2>Latest Posts</h2>

      {loading && <p>Loading posts...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading &&
        !error &&
        posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "6px",
              padding: "1.25rem",
              marginBottom: "1rem",
            }}
          >
            <h3 style={{ margin: "0 0 0.5rem" }}>{post.title}</h3>
            <p style={{ margin: "0 0 0.75rem", color: "#444" }}>
              {post.content}
            </p>
            <small style={{ color: "#888" }}>By {post.author}</small>
          </div>
        ))}

      {!error && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "1rem",
            justifyContent: "space-between",
          }}
        >
          <small style={{ color: "#888" }}>
            Showing {Math.min((page - 1) * perPage + 1, total)}–
            {Math.min(page * perPage, total)} of {total}
          </small>
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <button onClick={() => setPage((p) => p - 1)} disabled={page === 1}>
              Previous
            </button>
            <span>
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => p + 1)}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
