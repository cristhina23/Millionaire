import  { useState, useEffect } from 'react';

export default function Timer({ setStop, questionNumber }) {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) {
      setStop(true);
      return; // Exit early if the timer reaches 0
    }
    
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    
    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, [timer, setStop]); // Include timer and setStop in the dependency array

  useEffect(() => {
    setTimer(30);
  }, [questionNumber]);
  return <div> {timer} </div>;
}


