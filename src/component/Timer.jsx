import React, { useEffect, useState } from "react";

const Timer = () => {
  const [second, setsecond] = useState(0);
  const [mintues, setmintues] = useState(0);
  const [hours, sethours] = useState(0);
  const[pause,setpause]=useState(false);

  useEffect(() => {
    let timer = setInterval(() => {
      if(pause){
      setsecond(second + 1);
      if (second === 59) {
        setmintues(mintues + 1);
        setsecond(0);
      }
      if (mintues === 59) {
        sethours(hours + 1);
        setmintues(0);
      }
    }
    }, 1000);

    return () => clearInterval(timer);
  });
 
  const restart = () => {
    setsecond(0);
    setmintues(0);
    sethours(0);
  };

  // for stop
  const stop = () => {
    setpause(!pause);
  };

  return (
    <>
      <div className="timer">
        <div className="container">
          <div className="timer-container">
            <h2>timer</h2>
            <h2>
              {hours < 10?"0"+hours:hours}:
              {mintues < 10 ? "0" + mintues : mintues}:
              {second < 10 ? "0" + second : second}
            </h2>
          </div>
          <button
            onClick={restart}
            style={{
              backgroundColor: "green",
              width: "100px",
              height: "50px",
              fontSize: "20px",
            }}
          >
            restart
          </button>
          
          <button
            onClick={stop}
            style={{
              backgroundColor: "yellow",
              width: "100px",
              height: "50px",
              fontSize: "20px",
              marginLeft: "20px",
            }}
          >
           {(!pause)?"start":"pause"}
          </button>:
        </div>
      </div>
    </>
  );
};

export default Timer;
