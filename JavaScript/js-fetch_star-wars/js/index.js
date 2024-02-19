import { Card } from "../components/Card/Card.js";
import { renderElement } from "./utils.js";

console.clear();


fetchDataAndRender();

// --v-- your code below this line --v--

async function fetchDataAndRender() {
  const newCharacters= await fetchData(); //Datenbank einlesen
  
  newCharacters.forEach(character => renderElement(Card(character))); //Array mit forEach für jede Karte anwenden....Function Card in renderElement setzten, damit es in Root eingefügt wird.
}

async function fetchData(){
  const response = await fetch("https://swapi.dev/api/people");
  const json = await response.json();
  console.log(json)
  return json.results
}
