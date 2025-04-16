import { useState } from 'react'
import
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mycomponent from './components/Mycomponent'
function App() {
  const [count, setCount] = useState(0);
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");
  const onTextInputChange = (e) => {
    setTextInput(e.target.value);
  }
  const onAddBtnClick = (e) => {
    // setTodoList([{...todoList,{id:'',name:textInput,isCom}}])
  }
  return (
    <>
      {/* <h3>Danh sach viec can lam</h3>
      <input type="text" name="" id="" value={textInput} onChange={onTextInputChange} /> */}
      <Mycomponent></Mycomponent>
    </>
  )
}

export default App


// import React, { useReducer, useRef, memo, useMemo, useCallback } from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// function Hello() {
//   return <h1>Chao MungMung</h1>
// }
// export default Hello;

// // Reducer function
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// };

// const Counter = memo(({ count, onIncrement }) => {
//   console.log("Rendering Counter Component");
//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={onIncrement}>Increase</button>
//     </div>
//   );
// });

// const Home = () => {
//   const [state, dispatch] = useReducer(reducer, { count: 0 });
//   const inputRef = useRef(null);

//   const handleIncrement = useCallback(() => {
//     dispatch({ type: "increment" });
//   }, []);

//   const expensiveCalculation = useMemo(() => {
//     console.log("Running expensive calculation");
//     return state.count * 2;
//   }, [state.count]);

//   const handleGetValue = () => {
//     console.log("Input Value:", inputRef.current.value);
//   };

//   return (
//     <div>
//       <h1> Debug</h1>
//       <Counter count={state.count} onIncrement={handleIncrement} />
//       <p>  ket qua: {expensiveCalculation}</p>
//       <input ref={inputRef} type="text" placeholder="Enter something" />
//       <button onClick={handleGetValue}>Nhap</button>
//     </div>
//   );
// };

// const About = () => <h2> Page</h2>;

// const App = () => {
//   return (
//     <Router>
//       <nav>
//         <Link to="/"></Link> | <Link to="/about"></Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
