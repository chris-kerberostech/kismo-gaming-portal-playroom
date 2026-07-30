import React from "react";
import "./OverlayBanner.css";

export default function OverlayBanner({ show, type }) {
  if (!show) return null;

  let text = "";
  if (type === "victory") text = "Victory!";
  else if (type === "defeat") text = "Defeat!";
  else if (type === "draw") text = "Draw!";

  return <div className={`overlay-banner ${type}`}>{text}</div>;
}
