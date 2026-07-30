import React, { useEffect, useState } from "react";
import avatarTeasing from "./kismo-avatar.png";
import avatarSad from "./kismo-sad.png";
import avatarSatisfied from "./kismo-satisfied.png";
import avatarSuspicious from "./Kismo-suspicious.png";
import avatarTeasing2 from "./Kismo-teasing.png";
import "./KismoAvatarNeon.css";

const stateToAvatar = {
  teasing: avatarTeasing,
  sad: avatarSad,
  satisfied: avatarSatisfied,
  suspicious: avatarSuspicious,
  // Βάλε όσα θες ακόμα!
};

export default function KismoAvatarNeon({ state }) {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    setPulse(true);
    const timer = setTimeout(() => setPulse(false), 500);
    return () => clearTimeout(timer);
  }, [state]);

  return (
    <div className={`kismo-avatar-neon${pulse ? " pulse" : ""}`}>
      <img
        src={stateToAvatar[state] || avatarTeasing}
        className="kismo-avatar-img"
        alt="Kismo avatar"
        draggable={false}
      />
    </div>
  );
}
