"use client"
import styles from "./page.module.css"
import Input from "./components/inputs";
import Image from "next/image";
import MessageButton from "./components/messageButton";
import Button from "./components/button";
import { useState } from "react";
import { useSocket } from "./hooks/useSocket";
import { useEffect } from "react";
export default function home() {
    const { socket, isConnected } = useSocket();
    const [message, setMessage] = useState("");

    useEffect(() => {
        // Evitar que genere errores si no esta el socket
        if (!socket) return;

        socket.on('pingAll', (data) => {
            console.log("me llego mensaje", data);
        })
        
        socket.on('newMessage', (data) => {
            console.log("Mensaje de la sala", data);
        })
        
        socket.on('pingAll', (data) => {
            console.log("me llego mensaje", data);
        })

    }, [socket,isConnected]);


    function handleClick() {
        socket.emit('pingAll', {message: "facu pit chico"})
    }
    
    function handleSendMessage() {
        socket.emit('sendMessage', {message: message})
    }

    function handleChangeInput(event) {
        setMessage(event.target.value);
    }
      

    return (
        <div className={styles.div_child}>
            <section className={styles.barraContactos}>

            </section>
            <section className={styles.seccionMensajes}>
                <MessageButton text="devolveme la plata gil"/>
                <MessageButton text="devolveme la plata gil"/>
                <Button onClick={()=>socket.emit('joinRoom',{room:"boca"})} text="Conectar/ Unirse a la sala"/>
            </section>
            <section className={styles.barraDeEscribir}>
                <div className={styles.escribirDiv}>
                    <Input className={styles.inputEscribir} placeholder="Escribir" onChange={handleChangeInput} />
                </div>
                <div>

                    <Image className={styles.iconoMicro} onClick={handleSendMessage}
                        src="/images/icono_Micro.png"
                        width={35}
                        height={35}
                        alt="iconoMicrofono"
                    />
                </div>
            </section>
        </div>
    )
}