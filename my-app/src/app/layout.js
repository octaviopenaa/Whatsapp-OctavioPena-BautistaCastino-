import styles from "./page.module.css"
import Titulo from "./components/title";
import Input from "./components/inputs";
import Button from "./components/button";
import Chatbutton from "./components/chatButton";
import Image from "next/image";
export default function RootLayout({ children }) {
  async function crearContacto() {
        
  }
  return (
    <html lang="en">
      <body className={styles.body}>
        <main className={styles.main}>
          <seccion className={styles.seccion_emotes}>
            <Image className={styles.emoticonos}
              src="/images/icono_Chat.png"
              width={35}
              height={35}
              alt="iconochat"
            />
            <Image className={styles.emoticonos}
              src="/images/icono_Estado.png"
              width={35}
              height={35}
              alt="iconoEstado"
            />
            <Image className={styles.emoticonos}
              src="/images/icono_Comunidad.png"
              width={35}
              height={35}
              alt="iconoComunidad"
            />
            <Image className={styles.emoticonos}
              src="/images/icono_Comunidad.png"
              width={35}
              height={35}
              alt="iconoComunidad"
            />
          </seccion>

          <seccion className={styles.seccion_chats}>
            <seccion>
              <header className={styles.header}>
                <Titulo text="Chats"/>
              </header>
              <div>
                <Input placeholder="Buscar" className={styles.input}/>
              </div>
              <div className={styles.div_botones}>
                <Button text="Todos" />
                <Button text="No leídos" />
                <Button text="Grupos" />
              </div>
            </seccion>
            <seccion className={styles.contactos}>
              <div className={styles.div_chatbuttons}>
                <Chatbutton srcImg="/images/fotoDePerfilPredem.jpg" alt="fotoPerfil" contacto="BautiPuto" ultimoMensaje="devolveme la plata gil" />
                <Chatbutton srcImg="/images/fotoDePerfilPredem.jpg" alt="fotoPerfil" contacto="BautiPuto" ultimoMensaje="devolveme la plata gil" />
                <Chatbutton srcImg="/images/fotoDePerfilPredem.jpg" alt="fotoPerfil" contacto="BautiPuto" ultimoMensaje="devolveme la plata gil" />
                <Chatbutton srcImg="/images/fotoDePerfilPredem.jpg" alt="fotoPerfil" contacto="BautiPuto" ultimoMensaje="devolveme la plata gil" />
                <Chatbutton srcImg="/images/fotoDePerfilPredem.jpg" alt="fotoPerfil" contacto="boca" ultimoMensaje="devolveme la plata gil" />
                <Chatbutton srcImg="/images/fotoDePerfilPredem.jpg" alt="fotoPerfil" contacto="BautiPuto" ultimoMensaje="devolveme la plata gil" />
                <Chatbutton srcImg="/images/fotoDePerfilPredem.jpg" alt="fotoPerfil" contacto="BautiPuto" ultimoMensaje="devolveme la plata gil" />
                <Chatbutton srcImg="/images/fotoDePerfilPredem.jpg" alt="fotoPerfil" contacto="nashe" ultimoMensaje="devolveme la plata gil" />
                <Chatbutton srcImg="/images/fotoDePerfilPredem.jpg" alt="fotoPerfil" contacto="BautiPuto" ultimoMensaje="devolveme la plata gil" />
                <Chatbutton srcImg="/images/fotoDePerfilPredem.jpg" alt="fotoPerfil" contacto="insta" ultimoMensaje="devolveme la plata gil" />
              </div>
            </seccion>
          </seccion>

          <seccion>{children}</seccion>
        </main>

      </body>
    </html>
  );
}
