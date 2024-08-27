"use client"

import clsx from "clsx"
import styles from "./button.module.css"
export default function Button({ onClick, text }) {
    return (
        <>
            <button type="button" onClick={onClick} className={styles.button}>{text}</button>
        </>
    )
}