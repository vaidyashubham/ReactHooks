import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  const [idFromBtnClick, setIdFromBtnClick] = useState(1)

  const handleClick = () => {
    setIdFromBtnClick(id)
  }

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClick}`)
      .then((response) => {
        console.log(response)
        setPost(response.data)
      })
      .catch((error => console.log(error)))
  }, [idFromBtnClick])
  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button onClick={handleClick}>Fetch Post</button>
      <h2>{post.title}</h2>
      {/* <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div >
  )
}

export default DataFetching
