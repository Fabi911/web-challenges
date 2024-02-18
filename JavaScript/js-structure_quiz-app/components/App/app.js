import { cards } from "../../data.js";
import { Header } from "../Header/header.js";
import { Form, handleFormSubmit } from "../Form/form.js";
import { CardList } from "../CardList/CardList.js";
import { Card } from "../Card/Card.js";

export function App() {
    const app = document.createElement("main");
    app.classList.add("app");
    app.append(Header(), Form(), CardList());
  
    return app;
  }