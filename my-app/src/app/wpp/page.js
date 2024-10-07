"use client"
import styles from "./page.module.css"
import Input from "../components/inputs";
import Image from "next/image";
import MessageButton from "../components/messageButton";
import Button from "../components/button";
import { useState } from "react";
import { useSocket } from "../hooks/useSocket";
import { useEffect } from "react";
import Chatbutton from "../components/chatButton";
import { useContacts } from "../context/ContactContext";

export default function home({}) {
    const { socket, isConnected } = useSocket();
    const { activeContacts} = useContacts();
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);


    useEffect(() => {
        // Evitar que genere errores si no esta el socket
        console.log(socket)
        if (!socket) return;
        console.log("hola")
        socket.on('newMessage',(messages) => {
            console.log("Mensaje de la sala", messages);
        })
    }, [socket, isConnected]);

    function handleSendMessage() {
        if (message.trim() === "") return;
        socket.emit('sendMessage', { message: message })
        console.log(message)
        setMessages((prevMessages) => [...prevMessages, message]); // Añadir el mensaje al estado
        setMessage(""); // Limpiar el input después de enviar
    }

    function handleChangeInput(event) {
        setMessage(event.target.value);
    }
    //<Button onClick={()=>socket.emit('joinRoom',{room:"boca"})} text="Conectar/ Unirse a la sala"/>

    return (
        <div className={styles.div_child}>
            <section className={styles.barraContactos}>
                {activeContacts.map((contact) => (
                    <Chatbutton
                        key={contact.telefono} // Añadir una clave única
                        srcImg={contact.urlImagen}
                        alt={contact.nombre}
                        contacto={contact.usuarioContacto}
                        variant="barra"  // Variante para la barra de contactos
                    /> 
                ))}
            </section>
            <section className={styles.seccionMensajes}>
                {messages.map((message, index) => (
                    <MessageButton key={index} text={message} /> // Renderizar componente Mensaje para cada mensaje
                ))}
            </section>
            <section className={styles.barraDeEscribir}>
                <div className={styles.escribirDiv}>
                    <Input variant="Escribir" placeholder="Escribir" value={message} onChange={handleChangeInput} />
                </div>
                <div>

                    <Image className={styles.iconoEnviar} onClick={handleSendMessage}
                        src="/images/icono_Enviar.png"
                        width={35}
                        height={35}
                        alt="iconoEnviar"
                    />
                </div>
            </section>
        </div>
    )
}