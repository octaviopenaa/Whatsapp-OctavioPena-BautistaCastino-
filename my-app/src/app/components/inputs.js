import styles from "./inputs.module.css"
export default function Input({placeholder}){
    return(
        <input className={styles.input} placeholder={placeholder}></input>
    )
}