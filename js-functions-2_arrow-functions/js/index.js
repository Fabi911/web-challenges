console.clear();

/*
Rewrite the following functions as arrow functions.
Use implicit returns when possible
*/

const getCurrentHour= () => {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour === 0) {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
}

const  getVectorLength= (x, y, z) =>{
  return (x ** 2 + y ** 2 + z ** 2) ** 0.5;
}
const cleanInput= string => string.toLowerCase().trim();

/*
Rewrite the following arrow functions as classic functions.
*/

function isOddAndSmall(number) {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
};

function add3 (a, b, c){
   const sum = a + b + c;
   return sum;
}
function repeat10(string){ 
  return string.repeat(10);
}

console.log(getCurrentHour())
console.log(getVectorLength(2, 4, 7))
console.log(cleanInput('HaLlo'))
console.log(isOddAndSmall(9))
console.log(add3 (8, 5, 7))
