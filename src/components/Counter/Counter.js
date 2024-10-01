import { useState, useRef, useEffect } from "react";

const Counter = () => {
  const [number, setNumber] = useState("");
  const [intervalId, setId] = useState(null);

  useEffect(() => {
    if (number === 0) {
      clearInterval(intervalId);
    }
  }, [number]);

  const handleInputChange = (e) => {
    setNumber(e.target.value);
  };

  const handleTimer = () => {
    const timer = setInterval(() => {
      setNumber((prevCount) => prevCount - 1);
    }, 1000);

    setId(timer);
  };

  return (
    <>
      <div>
        Enter number <input onChange={handleInputChange}></input>
      </div>
      <button
        onClick={() => {
          handleTimer();
        }}
      >
        Start
      </button>
      <div>{number}</div>
    </>
  );
};

export default Counter;
