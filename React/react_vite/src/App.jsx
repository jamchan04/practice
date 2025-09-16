import { useState, useRef, useEffect } from "react";
import "./App.css";
import MyComp from "./components/MyComp";
import InputForm from "./components/InputForm";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  let score;
  const myRef = useRef(0);

  const clickScore = (e) => {
    score += 1;
    console.log("번수", score);
  };

  const changeInput = (e) => {
    setInputValue(e.target.value);
  };
  const clickRef = (e) => {
    myRef.current = myRef.current + 1;

    console.log("ref", myRef.current);
  };

  const clickIncrease = (e) => {
    setCount((preCount) => preCount + 1);
  };
  const clickDecrease = (e) => {
    setCount((preCount) => preCount - 1);
  };

  const inputRef = useRef();
  console.log(inputRef);
  console.log(inputRef.current);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <input type="text" ref={inputRef} onChange={changeInput} />
      {/* {count === 2 && <MyComp />} */}
      <h1>변수: {score}</h1>
      <h1>ref: {myRef.current}</h1>
      <h1>count: {count}</h1>
      <button onClick={clickIncrease}>증가</button>
      <button onClick={clickDecrease}>감소</button>

      <button onClick={clickScore}>score</button>
      <button onClick={clickRef}>ref</button>
      <InputForm />
    </>
  );
}

export default App;
