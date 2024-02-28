import { useEffect, useState } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });
  useEffect(() => {
    async function getISSCoords() {
      const response = await fetch(URL);
      if (!response.ok) {
        console.log("Network error");
        return null;
      }
      try {
        const data = await response.json();
        return setCoords(data);
      } catch (error) {
        console.error(error);
        alert("'There's a Network error!");
        return null;
      }
    }
    getISSCoords();

    const intervalId = setInterval(() => {
      getISSCoords();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls longitude={coords.longitude} latitude={coords.latitude} />
    </main>
  );
}
