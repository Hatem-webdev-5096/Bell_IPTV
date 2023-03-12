import styles from "./hero.module.css";
import HeroVideo from "./heroVideo/HeroVideo";
import React, { useState, useEffect } from "react";
const words = ["ANYTHING.", "LIVE SPORTS.", "TV SHOWS.", "MOVIES."];

const Hero = (props) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // typeWriter
  useEffect(() => {
    if (index === words.length - 1 && subIndex === words[index].length) {
      setTimeout(() => {
        setIndex(0);
        setSubIndex(0);
      }, 1000);
    }

    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 50)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <p className={`display-1 ${styles.heroText}`}>
          The ONLY subscription you need to watch{" "}
          <span>{`${words[index].substring(0, subIndex)}${
            blink ? "|" : " "
          }`}</span>
        </p>
        <HeroVideo />
      </div>
    </div>
  );
};

export default Hero;

{
  /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 10">
        <defs>
          <linearGradient id="myGradient" gradientTransform="rotate(10)">
            <stop offset="0%" stopColor="#fec143" />
            <stop offset="35%" stopColor="#fe8734" />
            <stop offset="100%" stopColor="#fc1a57" />
          </linearGradient>
        </defs>
        <path
          fill="url('#myGradient')"
          fillOpacity="1"
          d="M0,256L40,229.3C80,203,160,149,240,138.7C320,128,400,160,480,154.7C560,149,640,107,720,74.7C800,43,880,21,960,42.7C1040,64,1120,128,1200,138.7C1280,149,1360,107,1400,85.3L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg> */
}
{
  /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 10">
        <defs>
          <linearGradient id="myGradient" gradientTransform="rotate(10)">
            <stop offset="0%" stopColor="#fec143" />
            <stop offset="35%" stopColor="#fe8734" />
            <stop offset="100%" stopColor="#fc1a57" />
          </linearGradient>
        </defs>
        <path
          fill="url('#myGradient')"
          fill-opacity="1"
          d="M0,256L120,266.7C240,277,480,299,720,277.3C960,256,1200,192,1320,160L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>  */
}
