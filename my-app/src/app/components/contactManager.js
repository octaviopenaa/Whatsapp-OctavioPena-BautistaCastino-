"use client";
import { useContacts } from "../context/ContactContext";
import Chatbutton from "../components/chatButton";
import { useEffect, useState } from "react";
import styles from "../components/contactManager.module.css";

export default function ContactManager() {
  const [contacts, setContacts] = useState([]);
  const { activeContacts, setActiveContacts } = useContacts(); // Ahora disponible dentro del contexto
  const [activeContact, setActiveContact] = useState(null); // Agregar estado para el contacto activo
  // Función para cargar contactos
  async function traerContactos() {
    const response = await fetch('http://localhost:7000/Contactos', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setContacts(data); // Almacenar los contactos
  }

  useEffect(() => {
    traerContactos();
  }, []);

  function handleContactClick(contact) {
    // Evitar agregar contactos duplicados
    if (!activeContacts.some((c) => c.usuarioContacto === contact.usuarioContacto)) {
        setActiveContacts((prev) => [...prev, contact]);
    }
    
    // Aquí actualizas el contacto activo
    setActiveContact(contact); // Agregar esto para actualizar el contacto activo
  }

  return (
    <div className={styles.div_chatbuttons}>
      {contacts.map((contact) => (
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