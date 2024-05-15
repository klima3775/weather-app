import { useEffect, useState } from "react";
import Moment from "react-moment";
import "./timer.scss";

const Timer = () => {
  const [time, setTime] = useState(new Date());
  const [prevMinute, setPrevMinute] = useState(time.getMinutes());
  const [prevHour, setPrevHour] = useState(time.getHours());
  const [animateMinute, setAnimateMinute] = useState(false);
  const [animateHour, setAnimateHour] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = new Date();
      const currentMinute = currentTime.getMinutes();
      const currentHour = currentTime.getHours();

      if (currentMinute !== prevMinute) {
        setAnimateMinute(true);
        setPrevMinute(currentMinute);
      } else {
        setAnimateMinute(false);
      }

      if (currentHour !== prevHour) {
        setAnimateHour(true);
        setPrevHour(currentHour);
      } else {
        setAnimateHour(false);
      }

      setTime(currentTime);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [prevMinute, prevHour]);

  return (
    <div className="local-date">
      <div className="date">
        <div className="info-date">
          <Moment format="dddd">{time}</Moment>
        </div>
        <div className="info-date">
          <Moment format="D">{time}</Moment>
        </div>
        <div className="info-date">
          <Moment format="MMMM">{time}</Moment>
        </div>
      </div>
      <div className="timer">
        <div className={`time-card-hours ${animateHour ? "flip" : ""}`}>
          <Moment format="HH">{time}</Moment>
        </div>
        <div className={`time-card-minutes ${animateMinute ? "flip" : ""}`}>
          <Moment format="mm">{time}</Moment>
        </div>
      </div>
    </div>
  );
};

export default Timer;
