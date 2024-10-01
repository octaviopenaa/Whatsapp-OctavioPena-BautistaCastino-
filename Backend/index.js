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


app.get('/Contactos', async function(req,res){
    console.log(req.query) 
    const respuesta = await MySQL.realizarQuery(`
    SELECT * FROM Contactos;
    `)
    res.send(respuesta)
})

app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await db.collection('usuarios').find({}).toArray();
        res.status(200).json(usuarios);
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

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
    result = await MySQL.realizarQuery(`SELECT * FROM usuarios WHERE nombre = '${req.body.nombre}' AND nombre_usuario = '${req.body.nombre_usuario}' AND contraseña = '${req.body.contraseña}'`);
    if (result.length > 0) {
        res.send("Ya existe")
    } else {
        await MySQL.realizarQuery(`INSERT INTO usuarios (nombre, nombre_usuario, contraseña) VALUES ('${req.body.nombre}', '${req.body.nombre_usuario}','${req.body.contraseña}')`);
        res.send("ok")
    }
})

app.listen(port, function() {
    console.log(`Server running at http://localhost:${port}`);
    console.log('Defined routes:');
    console.log('   [GET] http://localhost:7000/Contactos');
    console.log('   [GET] http://localhost:7000/Chats');
    console.log('   [GET] http://localhost:7000/Mensajes');
    console.log('   [POST] http://localhost:7000/InsertarContactos');
    console.log('   [POST] http://localhost:7000/EnviarHistorial');
});

