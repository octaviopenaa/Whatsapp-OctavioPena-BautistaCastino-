"use client"
import styles from "./page.module.css"
import Input from "./components/inputs";
import Image from "next/image";
import { useSocket } from "./hooks/useSocket";
import { useEffect } from "react";
import Button from "./components/button";

export default function home() {
    const { socket, isConnected } = useSocket();

    useEffect(() => {
        // Evitar que genere errores si no esta el socket
        if (!socket) return;

        socket.on('pingAll', (data) => {
            console.log("me llego mensaje", data);
        })

    }, [socket,isConnected]);


    function handleClick() {
        socket.emit('pingAll', {message: "facu pito chico"})
    }

    return (
        <div className={styles.div_child}>
            <div className={styles.barraContactos}>
            <Button onClick={handleClick} text="Enviar pingALL"/>
            </div>
            <div className={styles.barraDeEscribir}>
                <div>
                    <div className={styles.escribirDiv}>
                        <Input className={styles.inputEscribir} placeholder="Escribir" />
                    </div>
                    <div>
                        <Image className={styles.iconoMicro}
                            src="/images/icono_Micro.png"
                            width={35}
                            height={35}
                            alt="iconoMicrofono"
                            />
                    </div>
                </div>
            </div>
        </div>
    )
}