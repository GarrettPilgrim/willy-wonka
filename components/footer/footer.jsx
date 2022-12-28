import styles from "./footer.module.scss"

export default function Footer() {
  return (
    <footer className={styles.container}>
      <a
        href="https://en.wikipedia.org/wiki/Charlie_and_the_Chocolate_Factory"
        target="_blank"
        rel="noopener noreferrer"
      >
        Roald Dahl's Book
      </a>
      <a
        href="https://www.imdb.com/title/tt0067992/?ref_=tt_ch"
        target="_blank"
        rel="noopener noreferrer"
      >
        Mel Stuart's Film
      </a>
      <a
        href="https://www.imdb.com/title/tt0367594/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tim Burton's Film
      </a>
    </footer>
  );
}
