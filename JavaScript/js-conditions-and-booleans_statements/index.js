console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";
const receivedPassword = "h4x0r1337";
const checkPassword=SUPER_SECRET_PASSWORD===receivedPassword;

if(checkPassword){
    console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
console.log("Access denied!");
};


// Part 2: Even / Odd
// - use an if/else statement to log 'even number' if the variable `number` is even, and 'odd number' otherwise
// - use different values for `number` to check if all cases work.
const number = 5;
const checkEven=number%2==0;
if(checkEven){
    console.log('even number');
}else {
    console.log('odd number');
}


// Part 3: Hotdogs
// for a given `numberOfHotdogs` a person buys, log the respective price that the person has to pay:
// - for less than 5 hotdogs: 2 euro per hotdog
// - for more than 5 but less than 100 hotdogs: 1.50 euro per hotdog
// - for more than 100 but less than 1 000 000 hotdogs: 1 euro per hotdog
// - for more than 1 000 000 hotdogs: 0.10 euro per hotdog
// - change the `numberOfHotdogs` to see if your code works properly

const numberOfHotdogs = 1000010;

if(numberOfHotdogs < 5){
    console.log('2 Euro')
} else if(numberOfHotdogs >= 5 && numberOfHotdogs < 100){
    console.log('1.50 Euro')
} else if(numberOfHotdogs >= 100 && numberOfHotdogs < 1000000 ){
    console.log('1 Euro')
} else {
    console.log('0.10 Euro')
};

// Part 4: Daytime
// - use a ternary operator to define the `statement` variable as follows:
// - if the currentHour is smaller than 17, `statement` should read "Still need to learn..."
// - if the currentHour is greater or equal to 17 it should equal "Partytime!!!"

const currentHour = 17;

const statement = currentHour<17 ? "Still need to learn..." : 'Partytime';

console.log(statement);

// Part 5: Greeting
// - use a ternary operator inside the round brackets to complete the `greeting` as follows.
// - if the variable `name` is equal to the name of your coach, the `greeting` should read "Hello Coach!"
// - otherwise the string saved in `name` should be used instead, e.g.:
//   ```js
//   const name = "Archibald";
//   // logs "Hello Archibald!"
//   ```
// - change the value of `name` to check if the ternary operator works properly.

const name = "Timo";

const coach = 'Marc'

const check = (name === coach ? 'Coach' : name)

const greeting = "Hello " + check + "!";

console.log(greeting);
