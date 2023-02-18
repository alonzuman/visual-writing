import { useState } from "react";
import VisualWriter from "./visual-writer";

export default function App() {
  const [value, setValue] = useState(
    // "Happiness can be found in the darkest of times if only one remembers to turn on the light. The quick brown fox jumps over the lazy dog."
    ""
  );

  return (
    <div className="demo">
      <VisualWriter value={value} onChange={(e) => setValue(e.target.value)} />
      <p style={{ fontSize: 12 }}>
        Credit to{" "}
        <a href="https://rauno.me/craft" target="_blank">
          Rauno Freiberg
        </a>
      </p>
    </div>
  );
}
