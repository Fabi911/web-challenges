import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name:'🍌 Banane',
      color:'yellow',
    },
    {
      id: 1338,
      name:'🍒 Cherry',
      color:'red',
    },
    {
      id: 1339,
      name:'🍎 apple',
      color:'red',
    },
    {
      id: 1340,
      name:'🍊 orange',
      color:'orange',
    },
    {
      id: 1341,
      name:'🍉 watermelon',
      color:'green',
    },
  ];

  return (
    <div className="app">
        {fruits.map(({ name, id, color }) => {
          return (
            <li key={id}>
              <Card id={id} name={name} color={color}/>
            </li>
          );
        })}
    </div>
  )
}
