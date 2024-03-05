import Link from "next/link";
import { introduction } from "@/lib/data";
import { volumes } from "@/lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)].slug;
  }

  return (
    <>
      <h1>Lord of the Rings</h1>
      <Link href="/volumes">Overview</Link>
      <br></br>
      <button
        type="button"
        onClick={() => router.push(`/volumes/${getRandomElement(volumes)}`)}
      >
        Random
      </button>
      <hr></hr>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
