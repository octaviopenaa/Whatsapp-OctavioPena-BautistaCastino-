import Titulo from "./components/title";
import styles from "./page.module.css"

export default function home(){
    return(
        <>
            <Titulo text="Hola mundo"/>
            <seccion className={styles.barraDeEscribir}></seccion>
        </>
    )
}