import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Movie() {
  const router = useRouter();
  console.log(router);

  const movie = router.query.slug;

  const currentMovie = volumes.find((volume) => volume.slug === movie);
  //   console.log(currentMovie);
  const { title, description, books, image } = currentMovie;
  return (
    <>
      <h1>{title}</h1>
      <Link href="/volumes">← All Volumes</Link>
      <hr></hr>
      <p>{description}</p>
      <ul>
        {books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <Image src={image} width={140} height={230} alt={title} />
    </>
  );
}
