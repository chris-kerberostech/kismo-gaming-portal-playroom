import React, { useEffect, useState } from "react";
import "./ConfettiHearts.css"; // <-- Εδώ το CSS import!

const NUM_HEARTS = 40;
const DURATION = 2000; // ms

const getRandom = (min, max) => Math.random() * (max - min) + min;

export default function ConfettiHearts({ show }) {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    if (show) {
      const newHearts = Array.from({ length: NUM_HEARTS }).map((_, i) => ({
        id: i,
        left: getRandom(5, 95), // %
        size: getRandom(18, 32), // px
        delay: getRandom(0, 500), // ms
        duration: getRandom(DURATION * 0.7, DURATION * 1.2), // ms
        rotate: getRandom(-30, 30),
      }));
      setHearts(newHearts);

      const timeout = setTimeout(() => setHearts([]), DURATION + 1200);
      return () => clearTimeout(timeout);
    }
  }, [show]);

  return (
    <div
      className="confetti-hearts-wrapper"
      style={{
        pointerEvents: "none",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 1000,
      }}
    >
      {hearts.map((h) => (
        <img
          key={h.id}
          src={require("./heartPixel.png")}
          alt="pixel heart"
          className="confetti-heart"
          style={{
            left: `${h.left}%`,
            width: h.size,
            height: h.size,
            animationDelay: `${h.delay}ms`,
            animationDuration: `${h.duration}ms`,
            transform: `rotate(${h.rotate}deg)`,
          }}
        />
      ))}
    </div>
  );
}
