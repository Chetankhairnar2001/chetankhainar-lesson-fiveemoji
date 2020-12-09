import React, { useState } from "react";
import "./styles.css";
//object conating items
const emojidictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "😂": "tears of joy",
  "🤑": "money-mouth",
  "😍": "hearty-eyes",
  "🤯": "explode-head"
};
var emojiarray = Object.keys(emojidictionary);

export default function App() {
  const [items, setItems] = useState("");
  function inputhandle(event) {
    var emoji = event.target.value;
    var items = emojidictionary[emoji];

    if (items === undefined) {
      items = "no such emoji found in database";
    }
    setItems(items);
  }

  function clickHandle(emoji) {
    var items = emojidictionary[emoji];
    setItems(items);
  }

  return (
    <div className="App">
      <h1>
        Welcome to <em> emoji</em> World
      </h1>
      <input onChange={inputhandle}></input>
      <h2 style={{ color: "Green" }}>{items}</h2>
      <h3>emojis we know</h3>
      <div>
        {emojiarray.map(function (emojiitem) {
          return (
            <span
              key={emojiitem}
              onClick={() => clickHandle(emojiitem)}
              style={{
                padding: "0.5rem 1rem",
                fontSize: "1.5rem",
                cursor: "pointer"
              }}
            >
              {emojiitem}
            </span>
          );
        })}
      </div>
    </div>
  );
}
