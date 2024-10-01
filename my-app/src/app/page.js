"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from "./login.module.css";
import Titulo from "./components/title";
import Input from "./components/inputs";

const MiComponente = () => {
    const [mostrarRegistro, setMostrarRegistro] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        nombre_usuario: '',
        contraseña: '',
        telefono: '',
    });
    const [loginData, setLoginData] = useState({
        nombre_usuario: '',
        contraseña: '',
    });
    const [error, setError] = useState('');
    const [noti, setNoti] = useState('');
    const [loginError, setLoginError] = useState('');
    const [loginNoti, setLoginNoti] = useState('');

    const manejarRegistro = () => {
        setMostrarRegistro(true);
    };

    function handleOnChange(event) {
        const { name, value } = event.target;
        if (mostrarRegistro) {
            setFormData({ ...formData, [name]: value });
        } else {
            setLoginData({ ...loginData, [name]: value });
        }
    };

    async function handleSubmit(event) {
        event.preventDefault();
        const { nombre, nombre_usuario, contraseña, telefono } = formData;

        if (telefono !== 10) {
            setError('El telefono debe tener exactamente 10 digitos')
            return
        }
        
        if (contraseña.length < 5) {
            setError('Contraseña muy insegura');
            return;
        }

        if (!nombre || !nombre_usuario || !contraseña) {
            setError('Todos los campos son obligatorios.');
            return;
        }

        setError('');
        setNoti('Te has registrado correctamente');

        await envioPost();

        // Limpiar el formulario
        setFormData({ nombre: '', nombre_usuario: '', contraseña: '', telefono: '' });
    };

    async function envioPost() {
        const data = formData;
        console.log(data);

        const response = await fetch('http://localhost:7000/InsertarUsuarios', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        console.log(response);
    }

    
    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                {mostrarRegistro ? (
                    <div className={styles.divInputs}>
                        <h3>Formulario de Registro</h3>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        {noti && <p style={{ color: 'green' }}>{noti}</p>}
                        <Input name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleOnChange} />
                        <Input name="nombre_usuario" placeholder="Nombre de usuario" value={formData.nombre_usuario} onChange={handleOnChange} />
                        <Input name="contraseña" placeholder="Contraseña" type="password" value={formData.contraseña} onChange={handleOnChange} />
                        <Input name="telefono" placeholder="Telefono" value={formData.telefono} onChange={handleOnChange} />
                        <button className={styles.button} type="submit">Registrarse</button>
                    </div>
                ) : (
                    <div>
                        <Titulo text="Bienvenido a Whatsapp" variant="login" />
                        <div className={styles.line}></div>
                        {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
                        {loginNoti && <p style={{ color: 'green' }}>{loginNoti}</p>}
                        <div className={styles.divInputs}>
                            <Input name="nombre_usuario" placeholder="Nombre de usuario" value={loginData.nombre_usuario} onChange={handleOnChange} />
                        </div>
                        <div className={styles.divInputs}>
                            <Input name="contraseña" placeholder="Contraseña" type="password" value={loginData.contraseña} onChange={handleOnChange} />
                        </div>
                        <button className={styles.button} type="submit">Ingresar</button>
                        <h3 className={styles.h3} onClick={manejarRegistro}>
                            ¿No tienes cuenta? Ingresate aquí
                        </h3>
                        <div className={styles.line}></div>
                    </div>
                )}
            </form>
        </div>
    );
};

export default MiComponente;






/*
"use client"
import Input from "./components/inputs"
import Titulo from "./components/title"
import styles from "./login.module.css"
export default function Login(){
    return(
        <div className={styles.container}>
            <form className={styles.form}>
                <div>
                    <Titulo text="Bienvenido a Whatsapp" variant="login"/>
                    <div className={styles.line}></div>
                </div>
                <div>
                    <div className={styles.divInputs}>
                    <Input placeholder="Nombre de usuario"/>
                    </div>
                    <div className={styles.divInputs}>
                    <Input placeholder="Contraseña"/>
                    </div>
                    <div>
                    <button className={styles.button}>Ingresar</button>
                    </div>
                    <h3 className={styles.h3}> ¿No tienes cuenta? Resgistrate aqui</h3>
                </div>
                <div className={styles.line}></div>
            </form>
        </div>
    )
}*/