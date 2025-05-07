
import {useState,useEffect} from "react";


function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [running, setRunning] = useState(false);
  
    useEffect(() => {
      if (running) {
        const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
        return () => clearInterval(interval);
      }
    }, [running]);
  
    return (
      <div>
        <h2>Timer: {seconds}s</h2>
        <button onClick={() => setRunning(!running)}>{running ? "Pause" : "Start"}</button>
        <button onClick={() => setSeconds(0)}>Reset</button>
      </div>
    );
  }

  export default Timer;