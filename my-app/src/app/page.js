"use client"
import Input from "./components/inputs"
import Titulo from "./components/title"
import styles from "./login.module.css"
export default function Login(){
    return(
        <div className={styles.container}>
            <form className={styles.form}>
                <div>
                    <Titulo text="Bienvenido" variant="login"/>
                </div>
                <div>
                    <div className={styles.divInputs}>
                    <Input placeholder="Escriba su nombre"/>
                    </div>
                    <div className={styles.divInputs}>
                    <Input placeholder="Escriba su nombre"/>
                    </div>
                    <div className={styles.divInputs}>
                    <Input placeholder="Escriba su nombre"/>
                    </div>
                </div>
            </form>
        </div>
    )
}