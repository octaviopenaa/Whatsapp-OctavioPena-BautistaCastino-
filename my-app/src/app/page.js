"use client"
import React, { useState } from 'react';
import styles from "./login.module.css"
import Titulo from "./components/title"
import Input from "./components/inputs"

const MiComponente = () => {
    const [mostrarRegistro, setMostrarRegistro] = useState(false);

    const manejarRegistro = () => {
        setMostrarRegistro(true);
    };

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                {mostrarRegistro ? (
                    <div className={styles.divInputs}>
                        <h3>Formulario de Registro</h3>
                        <Input placeholder="Nombre"/>
                        <Input placeholder="Email"/>
                        <Input placeholder="Contraseña"/>
                        <button className={styles.button}>Registrarse</button>
                    </div>
                ) : (
                    <div>
                        <Titulo text="Bienvenido a Whatsapp" variant="login"/>
                        <div className={styles.line}></div>
                        <div className={styles.divInputs}>
                            <Input placeholder="Nombre de usuario"/>
                        </div>
                        <div className={styles.divInputs}>
                            <Input placeholder="Contraseña"/>
                        </div>
                        <button className={styles.button}>Ingresar</button>
                        <h3 className={styles.h3} onClick={manejarRegistro}>
                            ¿No tienes cuenta? Ingresate  aquí
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