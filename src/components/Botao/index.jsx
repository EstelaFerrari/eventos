import styles from "./styles.module.css";

export default function Header() {
    return (
      <>
      <header>
        <nav className={styles.nav}>
            <li><a href="#">Formulário</a></li>
        </nav>
      </header>
      </>
    )
}