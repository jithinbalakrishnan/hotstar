// https://www.youtube.com/watch?v=5nq61iIKVDE
import { useEffect, useRef, useState } from "react";
import "./progressbar.css";

const ProgressBar = () => {
  const [percentage, setPercentage] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const progressRef = useRef();

  useEffect(() => {
    handleRef(percentage === 0 ? 0.5 : percentage);
  }, [percentage]);

  const handleClick = () => {
    if (percentage < 100) {
      let value = percentage + 10;
      setPercentage(value);
    }
  };
  const handleReset = () => {
    setPercentage(0);
  };
  const handleRef = (width) => {
    progressRef.current.style.width = width + "%";
  };
  const handleTimer = () => {
    let count = percentage;
    let timer = setInterval(() => {
      count = count + 10;
      console.log(count);
      if (count <= 100) {
        setPercentage(count);
      } else if ((count = 100)) {
        clearInterval(timer);
      }
    }, 1000);
    setIntervalId(timer);
  };
  const handleStopTimer = () => {
    clearInterval(intervalId);
    setPercentage(0);
  };

  return (
    <div className="container">
      <div className="progress-bar">
        <div
          className="progress-fill"
          ref={progressRef}
          //   style={{ width: `${percentage ? percentage : 1}%` }}
        ></div>
      </div>
      <br />
      <p>{percentage} %</p>
      <div className="btn-container">
        <button className="btn btn-success" onClick={handleClick}>
          Progress
        </button>
        <button className="btn btn-warning" onClick={handleReset}>
          Reset
        </button>
        <button className="btn btn-success" onClick={handleTimer}>
          Timer
        </button>
        <button className="btn btn-warning" onClick={handleStopTimer}>
          Stop Timer
        </button>
      </div>
    </div>
  );
};
export default ProgressBar;
