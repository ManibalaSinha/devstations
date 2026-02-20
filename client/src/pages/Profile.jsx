import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import {  useParams } from "react-router-dom";

function Profile() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;
  
  useEffect(() => {
    fetch(`${API_URL}/api/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched user:", data);
        setUser(data);
      })
      .catch((err) => console.error("Error fetching user:", err));
  }, [username]);

  if (!user) return <div>Loading...</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="red-underline">{user.username}s Profile </h1>
      <p>Number of posts: {user.post_count}</p>
      <h2>Posts</h2>
      {user.posts.length === 0 ? (
        <p>No posts yet</p>
      ) : (
        user.posts.map((post) => (
          <Link
            key={post.id}
            to={`/profile/${user.username}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="post-card">
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}

export default Profile;
