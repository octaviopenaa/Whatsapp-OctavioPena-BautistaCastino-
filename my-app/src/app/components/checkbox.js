"use client"
export default function Checkbox({onChange,text}) {
    return(
        <div>
            <input type="checkbox" onChange={onChange}/>
            <label>{text}</label>
        </div>
    )
}