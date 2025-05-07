import { useRef, useEffect, useState } from "react";

function AutoFocusInput() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null); // Store interval ID

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, []);

  return <p>Timer: {seconds} seconds</p>;
}

export default AutoFocusInput;
