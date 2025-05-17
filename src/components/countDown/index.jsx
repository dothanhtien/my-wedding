import React, { useState, useEffect } from "react";
import { CountDownItem, CountDownStyledWrapper } from "./style";

const countDownDate = new Date("June 22, 2025 11:00:00").getTime();

function Countdown() {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance < 0) {
      return null;
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft();
      setTimeLeft(updatedTimeLeft);
      if (!updatedTimeLeft) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <CountDownStyledWrapper>
        <CountDownItem>DONE</CountDownItem>
      </CountDownStyledWrapper>
    );
  }

  return (
    <CountDownStyledWrapper>
      {["days", "hours", "minutes", "seconds"].map((unit) => (
        <CountDownItem key={unit}>
          <div>{timeLeft[unit]}</div>
          <div>
            {unit === "days"
              ? "Ngày"
              : unit === "hours"
              ? "Giờ"
              : unit === "minutes"
              ? "Phút"
              : "Giây"}
          </div>
        </CountDownItem>
      ))}
    </CountDownStyledWrapper>
  );
}

export default Countdown;
