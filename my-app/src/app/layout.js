import Button from "./components/button"
import styles from "./page.module.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <main className={styles.main}>
          <seccion className={styles.seccion}><p>chats</p></seccion>
          <seccion className={styles.seccion}><Button text="hola"/></seccion>
          <seccion className={styles.seccion}>{children}</seccion>
        </main>
      </body>
    </html>
  )
}
