import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";
import {nanoid} from "nanoid"

const initialAnimals = [
  {
    id: "mTBErig",
    name: "Octopus",
    emoji: "🐙",
  },
  {
    id: "iMsbXQ1",
    name: "Crocodile",
    emoji: "🐊",
  },
  {
    id: "Qjf_K7V",
    name: "Beaver",
    emoji: "🦫",
  },
];

export default function App() {
  const [animals, setAnimals] = useState(initialAnimals);

  function handleAddAnimal(data) {
    const addAnimal=[...initialAnimals, {id:nanoid(), name:data.name, emoji:data.emoji}]
    setAnimals(addAnimal)
  }

  return (
    <main className="app">
      <Form onAddAnimal={handleAddAnimal} />
      <List animals={animals} />
    </main>
  );
}
