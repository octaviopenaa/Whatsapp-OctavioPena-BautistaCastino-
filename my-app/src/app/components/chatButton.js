import Image from "next/image"
import styles from "./chatButton.module.css"
export default function Chatbutton({contacto,ultimoMensaje,srcImg,alt}) {
    return(
        <div className={styles.chatButton} >
            <div>
                <Image
                    src={srcImg}
                    width={50}
                    height={50}
                    alt={alt}
                    className={styles.img}
                />
            </div>
            <div className={styles.div}>
                <h2 className={styles.h2}>{contacto}</h2>
                <p className={styles.p}>{ultimoMensaje}</p>
            </div>
        </div>
    )
}