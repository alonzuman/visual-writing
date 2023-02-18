import { useState } from "react";
import VisualWriter from "./visual-writer";

export default function App() {
  const [value, setValue] = useState(
    "Happiness can be found in the darkest of times if only one remembers to turn on the light. The quick brown fox jumps over the lazy dog."
  );

  return (
    <div className="demo">
      <span style={{ display: "flex", gap: 8 }}>
        <p style={{ fontSize: 12 }}>
          <a href="https://github.com/alonzuman/visual-writing">
            Link to repo
          </a>
        </p>
        <p style={{ fontSize: 12 }}>•</p>
        <p style={{ fontSize: 12 }}>
          Credit to{" "}
          <a href="https://rauno.me/craft" target="_blank">
            Rauno Freiberg
          </a>
        </p>
      </span>
      <VisualWriter value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}
