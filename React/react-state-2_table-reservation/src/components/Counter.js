

export default function Counter({handleSubtractCount,handleAddCount}) {
  
  return (
    <>
      <h2>How many people would you like to visit us with? </h2>
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment people count"
          onClick={handleAddCount}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement people count"
          onClick={handleSubtractCount}
        >
          -
        </button>
      </div>
    </>
  );
}
