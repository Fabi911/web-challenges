console.clear();

// EXERCISE 1
// Extract only the course name from the company object.
// Make sure to export your variable as in the example below to make the tests work.

export const company = {
  name: "neuefische",
  course: "Web Development",
  location: "Hamburg",
};

export const {course}=company;
console.log(course)

// example: export const {value1} = myObject;

// EXERCISE 2
// We have an object called 'user'.
// Write the destructuring assignment that reads:
//  2.1: 'name' property into the variable 'name'.
//  2.2: 'years' property into the variable 'age'.
//  2.3: 'isAdmin' property into the variable 'isAdmin' (false, if no such property exists)

export const user = { name: "John", years: 30 };

export const { name } =user 
export const {years: age}=user
export const {isAdmin=false}=user

console.log(age)

// EXERCISE 3
// Extract the variables from the dog object and
// rename them like "dogName", "dogBreed", and "dogAge", respectively.

export const dog = {
  name: "Pluto",
  breed: "husky",
  age: 5,
};

export const {name: dogName}=dog;
export const {breed: dogBreed}=dog;
export const {age: dogAge}=dog;

// EXERCISE 4
// Extract the 'lastName' property from the person object as "personLastName".
// Store all other properties in an object called "moreInformation".

const person = {
  lastName: "Main",
  
  firstName: "Alex",
  age: 24,
};

export const {lastName: personLastname, ...moreInformation }=person;
//export const {...moreInformation}=person

console.log(personLastname)
console.log(moreInformation)
