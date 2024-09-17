"use client"
export default function Input({placeholder, className, onChange}){
    return(
        <input className={className} placeholder={placeholder} onChange={onChange}>

        </input>
    )
}