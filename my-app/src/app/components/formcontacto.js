import Input from "./inputs";
import Titulo from "./title";
import styles from "./formcontacto.module.css"
import { useState } from 'react';

export default function FormContacto({isOpen, onClose}){
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        usuarioContacto: '',
        urlImagen: '',
      });
      const [error, setError] = useState('');
      const [noti, setNoti] = useState('');
    
      function handleChange(event){
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value }); // Mantiene los otros campos.
      };
    
      function handleSubmit(event){
        event.preventDefault();
        const { nombre, apellido, telefono, usuarioContacto, urlImagen } = formData;
    
        if (!nombre || !apellido || !telefono || !usuarioContacto || !urlImagen) {
          setError('Todos los campos son obligatorios.');
          return;
        } else{
          setNoti('Tu contacto se agrego correctamente')}

        if (telefono.length !== 10) {
          setError('El número de teléfono debe tener 10 dígitos.');
          return;
        }
        setError('');
        // Limpiamos el formulario
        setFormData({ nombre: '', apellido: '', telefono: '', usuarioContacto: '', urlImagen: '' });
      };

      if (!isOpen) return null;

      async function envioPost() {
        // Armo un objeto para mandarlo como formato JSON
        const data = formData;
        console.log(data)
    
        // Envio un pedido POST con un JSON en el body
        const response = await fetch('http://localhost:7000/InsertarContactos', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        console.log(response);
      }  
      return (
        <div className={styles.form}>
          <form onSubmit={handleSubmit} className={styles.formContent}>
            <span className={styles.close} onClick={onClose}>&times;</span>
            <h1>Agregar Contactos</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {noti && <p style={{ color: 'green' }}>{noti}</p>}
            <input name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} />
            <input name="apellido" placeholder="Apellido" value={formData.apellido} onChange={handleChange} />
            <input name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} />
            <input name="usuarioContacto" placeholder="Nombre del Contacto" value={formData.usuarioContacto} onChange={handleChange} />
            <input name="urlImagen" placeholder="URL de la Imagen" value={formData.urlImagen} onChange={handleChange} />
            <button type="submit" onClick={envioPost}>Agregar Contacto</button>
          </form>
        </div>
      );
    };
