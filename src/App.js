import React,{useState,useEffect} from "react"
import './App.css';

function App() {
  const[state,setState] = useState({
    count:0,
    time:new Date()
  })
  useEffect(() => {
    const updateCount = () => setState({
      count:state.count+1,
      time:new Date()
    })
    window.addEventListener("click",updateCount)
    return ()=>{
      window.removeEventListener("click",updateCount)
    }
  })
    return (
    <div className="App">
      <h2>{state.count}</h2>
      <h1>{state.time.toLocaleTimeString()}</h1>
    </div>
  );
}

export default App;
