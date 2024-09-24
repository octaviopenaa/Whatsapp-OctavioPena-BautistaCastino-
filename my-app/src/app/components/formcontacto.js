import Input from "./inputs";
import Titulo from "./title";
import { useState } from 'react';

export default function FormContacto(){
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        nombreContacto: '',
        urlImagen: '',
      });
      const [error, setError] = useState('');
      const [contactos, setContactos] = useState([]);
    
      const handleChange(event){
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value }); // Mantiene los otros campos.
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const { nombre, apellido, telefono, nombreContacto, urlImagen } = formData;
    
        if (!nombre || !apellido || !telefono || !nombreContacto || !urlImagen) {
          setError('Todos los campos son obligatorios.');
          return;
        }
        if (telefono.length !== 10) {
          setError('El número de teléfono debe tener 10 dígitos.');
          return;
        }
    
        setError('');
        // Agregamos el nuevo contacto
        setContactos((prevContactos) => [...prevContactos, formData]);
        // Limpiamos el formulario
        setFormData({ nombre: '', apellido: '', telefono: '', nombreContacto: '', urlImagen: '' });
      };
    
      return (
        <div>
          <form onSubmit={handleSubmit}>
            <h1>Agregar Contactos</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} />
            <input name="apellido" placeholder="Apellido" value={formData.apellido} onChange={handleChange} />
            <input name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} />
            <input name="nombreContacto" placeholder="Nombre del Contacto" value={formData.nombreContacto} onChange={handleChange} />
            <input name="urlImagen" placeholder="URL de la Imagen" value={formData.urlImagen} onChange={handleChange} />
            <button type="submit">Agregar Contacto</button>
          </form>
    
          <h2>Contactos Agregados:</h2>
          <ul>
            {contactos.map((contacto, index) => (
              <li key={index}>
                {contacto.nombre} {contacto.apellido} - {contacto.telefono} - {contacto.nombreContacto} <img src={contacto.urlImagen} alt={contacto.nombreContacto} width="50" />
              </li>
            ))}
          </ul>
        </div>
      );
    };
}