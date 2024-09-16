import styles from "./page.module.css"
import Input from "./components/inputs";
import Image from "next/image";

export default function home() {
    return (
        <div className={styles.div_child}>
            <div className={styles.barraContactos}>

            </div>
            <div className={styles.barraDeEscribir}>
                <div className={styles.escribirDiv}>
                    <Input className={styles.inputEscribir} placeholder="Escribir" />
                </div>
                <div>
                    <Image className={styles.icono_Micro}
                        src="/images/icono_Micro.png"
                        width={35}
                        height={35}
                        alt="iconochat"
                    />
                </div>
            </div>
        </div>
    )
}