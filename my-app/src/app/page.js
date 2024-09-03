import styles from "./page.module.css"
import Input from "./components/inputs";

export default function home(){
    return(
        <div className={styles.div_child}>
            <div className={styles.barraContactos}>

            </div>
            <div className={styles.barraDeEscribir}>
                <div className={styles.escribirDiv}>
                    <Input className={styles.inputEscribir} placeholder="Escribir" />
                </div>
            </div>
        </div>
    )
}