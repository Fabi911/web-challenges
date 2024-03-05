import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function TFotR() {
  const found = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  return (
    <>
      <h1>{found.title}</h1>
      <Link href="/volumes">← All Volumes</Link>
      <hr></hr>
      <p>{found.description}</p>
      <ul>
        {found.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <Image
        src="/images/the-fellowship-of-the-ring.png"
        width={140}
        height={230}
        alt="fellowship"
      />
    </>
  );
}
