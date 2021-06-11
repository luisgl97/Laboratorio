const express = require("express");
const app = express();
const port = 3000;

//Coneccion a base de datos
const mongoose = require('mongoose');

const user = 'tiendavirtual';
const password = 'bdtiendavirtual';
const bdname = 'TiendaVirtual'
const uri = `mongodb+srv://${user}:${password}@tienda-virtual.4kpkz.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log(e));


//motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')



app.use(express.static(__dirname + "/public")); //Middleware: Estamos ejecutando una funcion antes que se haga las solicitudes

//Rutas web
app.use('/', require('./router/RutasWeb'));
app.use('/productos', require('./router/Productos'))


app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo: "404",
        descripcion: "titulo del sitio web",
    });
})

app.listen(port, () => {
    console.log('servidor a su servicio en el puerto', port);

});