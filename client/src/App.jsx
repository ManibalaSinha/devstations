import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/posts')
      .then(res => setPosts(res.data))
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">DevStations Blog</h1>
      {posts.map(post => (
        <div key={post.id} className="mb-4 p-4 border rounded">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p>{post.content}</p>
          <p className="text-sm text-gray-500">By {post.author}</p>
        </div>
      ))}
    </div>
  )
}

export default App

