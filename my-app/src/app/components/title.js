import styles from "./title.module.css"
export default function Titulo({text}){
    return(
        <h1 className={styles.title}>{text}</h1>
    )
}