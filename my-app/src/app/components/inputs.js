import styles from "./inputs.module.css"
import clsx from "clsx"
export default function Input({placeholder, className}){
    return(
        <input className={className} placeholder={placeholder}>

        </input>
    )
}