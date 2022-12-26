import Image from "next/image";
import styles from "./text.module.scss"

export default function Text() {
  return (
    <section class={styles.ourstory} id="our-story">
      <Image
        src="/images/chocolate-factory.jpeg"
        alt="Front outside view of the chocolate factory"
        width={780}
        height={439}
      />
      <h2>Our Story</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        architecto exercitationem vero, possimus veritatis beatae laboriosam
        accusamus natus repudiandae laudantium sed itaque officiis ex.
        Laudantium labore itaque iusto. Nihil, totam!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        architecto exercitationem vero, possimus veritatis beatae laboriosam
        accusamus natus repudiandae laudantium sed itaque officiis ex.
        Laudantium labore itaque iusto. Nihil, totam!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        architecto exercitationem vero, possimus veritatis beatae laboriosam
        accusamus natus repudiandae laudantium sed itaque officiis ex.
        Laudantium labore itaque iusto. Nihil, totam!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        architecto exercitationem vero, possimus veritatis beatae laboriosam
        accusamus natus repudiandae laudantium sed itaque officiis ex.
        Laudantium labore itaque iusto. Nihil, totam!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        architecto exercitationem vero, possimus veritatis beatae laboriosam
        accusamus natus repudiandae laudantium sed itaque officiis ex.
        Laudantium labore itaque iusto. Nihil, totam!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        architecto exercitationem vero, possimus veritatis beatae laboriosam
        accusamus natus repudiandae laudantium sed itaque officiis ex.
        Laudantium labore itaque iusto. Nihil, totam!
      </p>
    </section>
  );
}
