const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const mysql = require('mysql');


const db = mysql.createPool({   // funcion para la conexion a la base de datos
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'front_end'
});


app.use(cors()) ;
app.use(express.json()) ;
app.use(bodyParser.urlencoded ({ extended: true }));



app.get("/api/get", (req, res) => {          // funcion para la recoleccion de datos de la tabla
    const sqlSelect = "SELECT * FROM proveedor";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});


app.post("/api/insert", (req, res) => {   // funcion para la insercion de datos en la tabla
    const name = req.body.name;
    const rut = req.body.rut;
    const direccion = req.body.direccion;
    const telefono = req.body.telefono;
    const price = req.body.price;
    const sqlInsert =
        "INSERT INTO proveedor (name,rut,direccion,telefono,price) VALUES (?,?,?,?,?)";
    db.query(sqlInsert, [name,rut,direccion,telefono, price], (err, result) => {
        console.log(result);
    });
});

app.delete("/api/delete/:id", (req, res) => {  // funcion para la eliminacion de datos en la table
    const id = req.params.id;
    const sqlDelete = "DELETE FROM proveedor WHERE id = ?";
    db.query(sqlDelete, id, (err, result) => {
        if (err) console.log(err);
    });
});

app.delete("/api/delete/:id", (req, res) => { // funcion para eliminar a traves de ID
    const id = req.params.id;
    const sqlDelete = "DELETE FROM proveedor WHERE id = ?";
    db.query(sqlDelete, id, (err, result) => {
        if (err) console.log(err);
    });
});

app.put("/api/update", (req, res) => { // Funcion para actualizar de acuerdo al id
    const id = req.body.id;
    const name = req.body.name;
    const rut = req.body.rut;
    const direccion = req.body.direccion;
    const telefono = req.body.telefono;
    const price = req.body.price;
    const sqlUpdate =
    "UPDATE proveedor SET name = ?, rut = ?, direccion = ?, telefono = ?, price = ? WHERE id = ?";
    db.query(sqlUpdate, [name, rut, direccion, telefono, price, id], (err, result) => {
        if (err) console.log(err);
    });
});



app.listen(3001, () => {
    console.log("Corriendo server en puerto 3001");
});