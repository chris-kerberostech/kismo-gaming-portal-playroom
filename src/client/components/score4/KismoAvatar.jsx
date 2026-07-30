export default function KismoAvatar({ state }) {
  return (
    <div className={`kismo-avatar ${state}`}>
      {state === "win" && "😈"}
      {state === "lose" && "🥵"}
      {state === "tie" && "😐"}
      {state === "idle" && "🦊"}
    </div>
  );
}
