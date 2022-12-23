import Image from "next/image";

export default function Cover() {
  return (
    <header>
      <Image
        src="/images/wonka-bar-transparent.png"
        alt="opened chocolate bar"
        width={1472}
        height={2056}
      />
      <div>
        <h1>A World of Pure Imagination</h1>
        <p>Wonka's chocolates prove dreams do come true.</p>
      </div>
    </header>
  );
}
