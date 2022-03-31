import React from "react";
import emojis from "../emojipedia";
import Entry from "./Entry";

function createEmoji (emoj) {
  return <Entry 
    key={emoj.id}
    name={emoj.name}
    emoji={emoj.emoji}
    meaning={emoj.meaning}
  />;
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojis.map(createEmoji)}
      </dl>
    </div>
  );
}

export default App;
