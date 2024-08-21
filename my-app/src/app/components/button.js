"use client"

import clsx from "clsx"


export default function Button({ onClick, text }) {
    return (
        <>
            <button type="button" onClick={onClick}>{text}</button>
        </>
    )
}