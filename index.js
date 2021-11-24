const express = require('express');
const app = express();
const path = require('path')

// Configuraciones
app.set('view engine', 'ejs');

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'views')));

// Rutas
require('./Routes/routes')(app)

app.listen(3000, () => {
    console.log('Server on port 3000')
});