import React, { useState } from "react";
import "./styles.css";

export default function App() {
  let [code,setCode] = useState("");

  const validCode = "🐡🐠🐋";

  function handleClick(event) {
    setCode(code + event.target.textContent);


  }
  return (
    <div className="container">
      <h2>only tree emojis: {code}</h2>
      <div className="button-container">
        <button
          type="button"
          onClick={(event) => {handleClick(event)
            console.log("Update Code!");  
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={(event) => {handleClick(event)
            console.log("Update Code!");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={(event) => {handleClick(event)
            console.log("Update Code!");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button
        type="button"
        onClick={() => {setCode('')
          console.log("Reset Code!");
        }}
      >
        Reset
      </button>
        {console.log(code)}
      {code === validCode && <p>`Valid code!`</p>}
      {code !== validCode && <p>`wrong code!`</p>}
    </div>
  );
}
