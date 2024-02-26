import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Hunde</Button>
      <Button>Rotwild</Button>
      <Button>Damwild</Button>
      <Button>Rehwild</Button>
    </main>
  );
}

function Button({children}) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
