import React, { useReducer } from 'react' //step1

const initialState = {
  firstCounter: 0
};  //step3
const reducer = (state, action) => { //step4
  switch (action.type) {
    case 'increment':
      return { firstCounter: state.firstCounter + action.value };
    case 'decrement':
      return { firstCounter: state.firstCounter - action.value };
    case 'reset':
      return initialState
    case 'default':
      return state
  }
}

function ReducerHook2() {

  const [count, dispatch] = useReducer(reducer, initialState) //step2

  return (
    <div>
      <div>Count {count.firstCounter}</div>
      <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  )
}

export default ReducerHook2
