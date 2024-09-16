"use client"
import styles from "./page.module.css"
import Input from "./components/inputs";
import Image from "next/image";
import MessageButton from "./components/messageButton";
export default function home() {
    /*const { socket, isConnected } = useSocket();

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
    <Button onClick={handleClick} text="Enviar pingALL"/> 
    */

    return (
        <div className={styles.div_child}>
            <section className={styles.barraContactos}>

            </section>
            <section className={styles.seccionMensajes}>
                <MessageButton text="devolveme la plata gil"/>
            </section>
            <section className={styles.barraDeEscribir}>
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
            </section>
        </div>
    )
}