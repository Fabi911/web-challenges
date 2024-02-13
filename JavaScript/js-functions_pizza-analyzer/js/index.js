console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');


pizzaInput1.addEventListener("input", () => {
  const pizzaSize1 = pizzaInput1.value;
  const pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1,pizzaSize2);
  updatePizzaDisplay();
  updateOutputColor();
});

pizzaInput2.addEventListener("input", () => {
  const pizzaSize2 = pizzaInput2.value;
  const pizzaSize1 = pizzaInput1.value;
  calculatePizzaGain(pizzaSize1,pizzaSize2);

})
// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2){
const area1=(Math.PI*(diameter1*diameter1))/4;
const area2=(Math.PI*(diameter2*diameter2))/4;
const gain=Math.round((area2 - area1) / area1 * 100);

updatePizzaDisplay(gain);
updateOutputColor(gain);

}

function updatePizzaDisplay(value){
  output.value=value;
}
// Task 2
// define the function updatePizzaDisplay here

// Task 3
// define the function updateOutputColor here
function updateOutputColor(negativeArea){
  if(negativeArea < 0){
    outputSection.style.backgroundColor="var(--red)";
  } else {
    outputSection.style.backgroundColor="var(--green)";
  }
}