import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const initialState = {
  loading: true,
  error: '',
  post: {}
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'Fetch_SUCCESS':
      return {
        loading: false,
        post: action.payload,
        error: ''
      }
    case 'Fetch_ERROR':
      return {
        loading: false,
        post: {},
        error: "Something went wrong"
      }
    default:
      return state
  }
}

function DataFetching2() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        dispatch({ type: 'Fetch_SUCCESS', payload: response.data })
      })
      .catch(error => {
        dispatch({ type: 'Fetch_ERROR' })
      })
  }, [])

  return (
    <div>
      {state.loading ? 'loading..' : state.post.title}
      {state.error ? state.error : null}
    </div>
  )
}

export default DataFetching2
