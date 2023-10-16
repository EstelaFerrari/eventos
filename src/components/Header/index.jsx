import styles from "./styles.module.css";

export default function Header() {
  return (
    <>
    <header>
      <nav className={styles.nav}>
        <ul className={styles.containerLink}>
          <li><a href="#">Formulário</a></li>
        </ul>
      </nav>
    </header>
    </>
  )
}