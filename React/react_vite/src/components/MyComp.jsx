import React, { useEffect } from "react";

const MyComp = () => {
  useEffect(() => {
    const time = setInterval(() => {
      console.log("반복반복 setInterval");
    }, 1000);
    return () => {
      clearInterval(time);
    };
  }, []);

  return (
    <>
      <h1>MyComp</h1>
    </>
  );
};

export default MyComp;
