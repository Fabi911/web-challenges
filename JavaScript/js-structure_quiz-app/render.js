import { App } from "./components/App/app.js";

export function render() {
    const root = document.querySelector("#root");
    root.append(App());
  }