import React from "react";

export default function UserAvatar({ url, nickname, active, borderColor = "#de0b59" }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        className={`user-avatar${active ? " glowing active" : ""}`}
        style={{
          width: active ? 80 : 54,
          height: active ? 80 : 54,
          borderRadius: "50%",
          overflow: "hidden",
          border: active ? `3px solid ${borderColor}` : `2px solid ${borderColor}`,
          boxShadow: active
            ? `0 0 24px ${borderColor}, 0 0 36px #32b2ea`
            : `0 0 8px ${borderColor}`,
          transition: "all 0.33s cubic-bezier(.55,1.8,.52,.91)",
          position: "relative",
        }}
      >
        <img
          src={url}
          alt="Your Avatar"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "all 0.33s cubic-bezier(.55,1.8,.52,.91)",
            display: "block",
          }}
        />
      </div>
      {/* Nickname */}
      <div
        className={`nickname${active ? " neon-nickname" : ""}`}
        style={{
          marginTop: 10,
          fontSize: active ? 20 : 16,
          color: active ? "#de0b59" : "#aaa",
          fontWeight: 600,
          letterSpacing: "0.5px",
          textShadow: active
            ? "0 0 10px #de0b59, 0 0 20px #32b2ea"
            : "0 0 2px #222",
          transition: "all 0.33s cubic-bezier(.55,1.8,.52,.91)",
        }}
      >
        {nickname}
      </div>
    </div>
  );
}
