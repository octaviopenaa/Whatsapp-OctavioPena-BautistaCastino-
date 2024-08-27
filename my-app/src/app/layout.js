import styles from "./page.module.css"
import Titulo from "./components/title";
import Input from "./components/inputs";
import Button from "./components/button";
import Chatbutton from "./components/chatButton";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <main className={styles.main}>
          <seccion className={styles.seccion_emotes}>

          </seccion>
          <seccion className={styles.seccion_chats}>
            <header className={styles.header}>
              <Titulo text="Chats"/>
            </header>
            <div>
              <Input placeholder="Buscar"/>
            </div>
            <div className={styles.div_botones}>
              <Button text="Todos"/>
              <Button text="No leídos"/>
              <Button text="Grupos"/>
            </div>
            <div className={styles.div_chatbuttons}>
              <Chatbutton url="/photos/fotoDePerfilPredem.jpg" contacto="BautiPuto" ultimoMensaje="devolveme la plata gil" />
              <Chatbutton url="/photos/fotoDePerfilPredem.jpg" contacto="BautiPuto" ultimoMensaje="devolveme la plata gil" />
              <Chatbutton url="/photos/fotoDePerfilPredem.jpg" contacto="BautiPuto" ultimoMensaje="devolveme la plata gil" />
              <Chatbutton url="/photos/fotoDePerfilPredem.jpg" contacto="BautiPuto" ultimoMensaje="devolveme la plata gil" />
              <Chatbutton url="/photos/fotoDePerfilPredem.jpg" contacto="BautiPuto" ultimoMensaje="devolveme la plata gil" />
            </div>
          </seccion>
          <seccion>{children}</seccion>
        </main>

      </body>
    </html>
  );
}
