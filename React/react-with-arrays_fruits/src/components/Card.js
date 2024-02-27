import "./Card.css";

export default function Card({ name, color }) {
  return( 
  <div className="card">
      <p>{name}</p>
      <p>{color}</p>
  </div>
)}
