import { useEffect, useState } from "react";
import Moment from "react-moment";
import "./timer.scss";

const Timer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="timer">
      <Moment format="HH:mm:ss">{time}</Moment>
    </div>
  );
};
export default Timer;
