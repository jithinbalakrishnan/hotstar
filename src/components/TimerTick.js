import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TimerTick = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let timer = setInterval(() => {
      console.log("timer tick");
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <p>Timer Tick</p>
      <p onClick={()=> navigate('/')}>Home</p>
    </>
  );
};

export default TimerTick;
