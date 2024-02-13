console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/
const now = new Date();
const day = now.getDay();
const hours = now.getHours();

const display = document.querySelector('[data-js="display"]');

function getGreeting(time) {
  if(time > 5 && time <= 12){
  return 'Good Morning' 
  } if(time > 12 && time <= 18){
    return 'Good Afternoon' 
    }if(time > 18 && time <= 22){
      return 'Good Evening' 
      }if(time > 22 && time <= 24 || time <=5){
        return 'Good Night' 
        }
}

function getDayColor(day) {
  if(day === 1 ){
    return 'darkgray'
  } if(day >=2 && day <=5){
    return 'lightblue'
  } if(day ===6 || day ===0){
    return 'hotpink'
  }
}

display.textContent = getGreeting(hours);
document.body.style.backgroundColor = getDayColor(day);
