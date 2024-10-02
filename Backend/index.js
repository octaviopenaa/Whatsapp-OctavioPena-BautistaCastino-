var express = require('express'); //Tipo de servidor: Express
var bodyParser = require('body-parser'); //Convierte los JSON
const MySQL = require('./modulos/mysql')
const cors = require('cors');

var app = express(); //Inicializo express
var port = 7000; //Ejecuto el servidor en el puerto 3000
// process.env.PORT || 
// Convierte una petición recibida (POST-GET...) a objeto JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());


// Endpoint para validar usuarios
app.get('/usuarios', async function (req, res) {
    const { nombre_usuario } = req.query;

    // Validar que se pase el nombre de usuario
    if (!nombre_usuario) {
        return res.status(400).json({ message: 'El nombre de usuario es obligatorio.' });
    }

    try {
        const respuesta = await MySQL.realizarQuery(`
            SELECT nombre_usuario, contraseña, telefono 
            FROM usuarios 
            WHERE nombre_usuario = ?;
        `, [nombre_usuario]);

        // Retornar los resultados
        res.json(respuesta);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en la base de datos' });
    }
});

app.get('/Contactos', async function(req,res){
    console.log(req.query) 
    const respuesta = await MySQL.realizarQuery(`
    SELECT * FROM Contactos;
    `)
    res.send(respuesta)
})

app.get('/usuarios', async function(req,res){
    console.log(req.query) 
    const respuesta = await MySQL.realizarQuery(`
    SELECT nombre_usuario, contraseña, telefono FROM usuarios;
    `)
    res.send(respuesta)
})

app.get('/Chats', async function(req,res){
    console.log(req.query) 
    const respuesta = await MySQL.realizarQuery(`
    SELECT * FROM Chats;
    `)
    res.send(respuesta)
})

app.get('/Mensajes', async function(req,res){
    console.log(req.query) 
    const respuesta = await MySQL.realizarQuery(`
    SELECT * FROM Mensajes;
    `)
    res.send(respuesta)
})


app.post('/InsertarContactos', async function(req,res) {
    console.log(req.body) 
    result = await MySQL.realizarQuery(`SELECT * FROM Contactos WHERE nombre = '${req.body.nombre}' AND telefono = '${req.body.telefono}' AND usuarioContacto = '${req.body.usuarioContacto}' AND imagenContacto = '${req.body.urlImagen}'`);
    if (result.length > 0) {
        res.send("Ya existe")
    } else {
        await MySQL.realizarQuery(`INSERT INTO Contactos (nombre, telefono, usuarioContacto, imagenContacto) VALUES ('${req.body.nombre}', '${req.body.telefono}','${req.body.usuarioContacto}', '${req.body.urlImagen}')`);
        res.send("ok")
    }
})

app.post('/InsertarUsuarios', async function(req,res) {
    console.log(req.body) 
    result = await MySQL.realizarQuery(`SELECT * FROM usuarios WHERE nombre = '${req.body.nombre}' AND nombre_usuario = '${req.body.nombre_usuario}' AND contraseña = '${req.body.contraseña}' AND telefono = '${req.body.telefono}'`);
    if (result.length > 0) {
        res.send("Ya existe")
    } else {
        await MySQL.realizarQuery(`INSERT INTO usuarios (nombre, nombre_usuario, contraseña, telefono) VALUES ('${req.body.nombre}', '${req.body.nombre_usuario}','${req.body.contraseña}', '${req.body.telefono}')`);
        res.send("ok")
    }
})

app.post('/validarUsuario', (req, res) => {
    const { nombre_usuario, contraseña, telefono } = req.body;

    // Busca el usuario en la base de datos
    const usuario = usuarios.find(u => u.nombre_usuario === nombre_usuario);

    // Si el usuario no existe o la contraseña o el teléfono no coinciden
    if (!usuario || usuario.contraseña !== contraseña || usuario.telefono !== telefono) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Si las credenciales son correctas
    return res.status(200).json({ message: 'Inicio de sesión exitoso' });
});

app.listen(port, function() {
    console.log(`Server running at http://localhost:${port}`);
    console.log('Defined routes:');
    console.log('   [GET] http://localhost:7000/Contactos');
    console.log('   [GET] http://localhost:7000/Chats');
    console.log('   [GET] http://localhost:7000/Mensajes');
    console.log('   [POST] http://localhost:7000/InsertarContactos');
    console.log('   [POST] http://localhost:7000/EnviarHistorial');
});

