"use client";
import { useContacts } from "../context/ContactContext";
import Chatbutton from "../components/chatButton";
import { useEffect, useState } from "react";
import styles from "../components/contactManager.module.css";
import { useSocket } from "../hooks/useSocket";

export default function ContactManager({contactos}) {
  const {setActiveContacts } = useContacts(); // Ahora disponible dentro del contexto
  const { socket } = useSocket();
  
  function handleContactClick(contact) {
    // Evitar agregar contactos duplicados
    setActiveContacts([contact]);
    socket.emit('joinRoom',{room:"boca"})
    console.log("Contacto seleccionado:", contact);
  }


  return (
    <div className={styles.div_chatbuttons}>
      {contactos.map((contact) => (
        <Chatbutton
          key={contact.telefono}
          srcImg={contact.urlImagen}
          alt={contact.nombre}
          contacto={contact.usuarioContacto}
          onClick={() => handleContactClick(contact)}
        />
      ))}
    </div>
  );
}