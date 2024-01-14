const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json());

// Importamos el Router de Libro
const librosRouter = require('./routes/libros');

// Importamos el Middleware Error Handler
const errorHandler = require('./middleware/errorHandler');

app.use('/libros', librosRouter,);

app.use(errorHandler);

app.listen(3000, () => {
    console.log('Servidor iniciando en el puerto 3000');
});

module.exports = router;
