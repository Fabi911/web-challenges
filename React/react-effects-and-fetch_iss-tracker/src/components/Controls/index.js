import "./Controls.css";

export default function Controls({ longitude, latitude }) {
  return (
    <div className="controls">
      <output className="controls__display">Lat: {latitude.toFixed(5)}</output>
      <output className="controls__display">Lng: {longitude.toFixed(5)}</output>
    </div>
  );
}
