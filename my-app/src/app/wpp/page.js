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

    }, [socket, isConnected]);


    function handleClick() {
        socket.emit('pingAll', { message: "facu pit chico" })
    }

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

    async function traerContactos() {
        const response = await fetch('http://localhost:7000/Contactos', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        console.log(result);
        return result
    }

    async function traerChats() {
        const response = await fetch('http://localhost:7000/Chats', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        console.log(result);
        return result
    }

    async function traerMensajes() {
        const response = await fetch('http://localhost:7000/Mensajes', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        console.log(result);
        return result
    }


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