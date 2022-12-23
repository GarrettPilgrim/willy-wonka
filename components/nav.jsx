import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <div class="logo">
        <Image
          src="/images/willy-wonka-logo.svg"
          width={67.7333}
          height={40.6333}
          alt="Willy Wonka Chocolates Logo"
        />
      </div>
      <ul>
        <li>
          <a href="#top">Top</a>
        </li>
        <li>
          <a href="#products">Products</a>
        </li>
        <li>
          <a href="#our-story">Story</a>
        </li>
        <li>
          <a href="#founder">Founder</a>
        </li>
      </ul>
    </nav>
  );
}
