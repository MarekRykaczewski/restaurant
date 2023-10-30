"use client";
import React from "react";
import Countdown from "react-countdown";

const CountDown = () => {
  const endDate = new Date("2023-10-31");

  return (
    <Countdown className="font-bold text-5xl text-yellow-300" date={endDate} />
  );
};

export default CountDown;
