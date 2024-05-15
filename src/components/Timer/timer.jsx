import { useEffect, useState } from "react";
import Moment from "react-moment";
import "./timer.scss";

const Timer = () => {
  const [time, setTime] = useState(new Date());
  const [prevMinute, setPrevMinute] = useState(time.getMinutes());
  const [prevHour, setPrevHour] = useState(time.getHours());
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = new Date();
      const currentMinute = currentTime.getMinutes();

      if (currentMinute !== prevMinute) {
        setAnimate(true);
        setPrevMinute(currentMinute);
      } else {
        setAnimate(false);
      }

      setTime(currentTime);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="timer">
      <div className={`time-card ${animate ? "flip" : ""}`}>
        <Moment format="HH">{time}</Moment>
      </div>
      <div className={`time-card ${animate ? "flip" : ""}`}>
        <Moment format="mm">{time}</Moment>
      </div>
    </div>
  );
};

export default Timer;
