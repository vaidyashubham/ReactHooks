import React, { useReducer } from 'react' //step1

const initialState = 0;  //step3
const reducer = (state, action) => { //step4
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    case 'default':
      return state
  }
}

function ReducerHook() {

  const [count, dispatch] = useReducer(reducer, initialState) //step2

  return (
    <div>
      <div>Count {count}</div>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default ReducerHook
