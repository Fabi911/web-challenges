import "./styles.css";

export default function App() {
  return <h1>Hello <Greeting name="Dominik"/></h1>;
}


function Greeting({name}){
  if(name==='Dominik')
  return name;
}
