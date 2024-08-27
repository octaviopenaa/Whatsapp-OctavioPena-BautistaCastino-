import styles from "./chatButton.module.css"
export default function Chatbutton({contacto,ultimoMensaje,urlImg}) {
    return(
        <div className={styles.chatButton}>
            <div><img url={urlImg} className={styles.img}></img></div>
            <div className={styles.div}>
                <h2 className={styles.h2}>{contacto}</h2>
                <p className={styles.p}>{ultimoMensaje}</p>
            </div>
        </div>
    )
}