import React, { useReducer } from 'react';
import './App.css';
import UseRefHook from './components/CustomHook3';
import ComponentB from './components/ComponentB.js';
import ComponentC from './components/ComponentC.js';
import ParentComponent from './components/callbackHooks/ParentComponent';

export const CountContext = React.createContext()

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    case 'default':
      return state;
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    // <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
    //   <div className="App">
    //     Count - {count}
    //     <ComponentA />
    //     <ComponentB />
    //     <ComponentC />
    //   </div>
    // </CountContext.Provider>
    <div className="App">
      {/* <DataFetching2 /> */}
      <UseRefHook />
    </div>
  );
}

export default App;
