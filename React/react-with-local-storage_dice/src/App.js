import { D6Button } from "./components/D6Button";
import History from "./components/History";
import { getD6Roll } from "./utils";
import "./styles.css";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const [rolls, setRolls] = useLocalStorageState("rolls", { defaultValue: [] });

  const handleRoll = () => {
    setRolls([{ value: getD6Roll(), time: Date.now() }, ...rolls]);
  };
  return (
    <div className="app">
      <main className="app__main">
        <D6Button handleRoll={handleRoll} rolls={rolls} />
      </main>
      <aside className="app__aside">
        <History rolls={rolls} />
      </aside>
    </div>
  );
}
