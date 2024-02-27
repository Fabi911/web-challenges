import ColoredNumber from "./ColoredNumber";
import {useState} from "react"

export default function Counter() {
 function LiftingUpState() {
    const [count, setCount] = useState(0);
  
    function handleSubtractCount() {
      setCount(count - 1);
    }
  
    function handleAddCount() {
      setCount(count + 1);
    }
  
  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
        onClick={handleAddCount}
          type="button"
          className="counter__button"
          aria-label="increment count"
        >
          +
        </button>
        <button
          onClick={handleSubtractCount}
          type="button"
          className="counter__button"
          aria-label="decrement count"
        >
          -
        </button>
      </div>
    </div>
  )}
  return (<LiftingUpState/>)
}
