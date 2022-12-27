import Link from "next/link";

export default function Links() {
  return (
    <>
      <li>
        <Link href="/products">Products</Link>
      </li>
      <li>
        <a href="#our-story">Story</a>
      </li>
      <li>
        <a href="#founder">Founder</a>
      </li>
    </>
  );
}
