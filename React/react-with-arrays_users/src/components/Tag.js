import "./Tag.css";

export default function Tag({ tag }) {
  const highLight = (tag === 'admin');
  return <li className={`tag ${highLight ? 'tag--highlight' : ''}`}>{tag}</li>;
}
