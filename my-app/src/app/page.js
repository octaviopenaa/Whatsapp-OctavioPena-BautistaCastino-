import styles from "./page.module.css"

export default function home(){
    return(
        <div className={styles.div_child}>
            <div className={styles.barraContactos}></div>
            <div className={styles.barraDeEscribir}>
            </div>
        </div>
    )
}