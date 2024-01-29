


import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [render, setRender] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setRender(false)
    },10000)
  })

  return (
    <>
      { render ? <MyComponent /> : <div>s</div>}
    </>
  );
}


function MyComponent() {

  useEffect(()=>{
    console.log("mount")
    return (
      console.log("unmount")
    )
  })
  return (
    <div>
      <button>x</button>
    </div>
  );
}

export default App