const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Recipe = require('./models/recipe'); // Importa el modelo Recipe

const app = express();

// Middleware para manejar solicitudes JSON y URL encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware para permitir CORS
app.use(cors());

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb+srv://martabelmonts5:123456a.@cluster0.jayulkv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conectado a la base de datos MongoDB');
});

// Crear el directorio 'uploads' si no existe
const uploadsDir = path.join(__dirname, 'uploads');

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Configuración de Multer para manejar la subida de archivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

// Rutas de la API
const recipesRouter = require('./routes/recipes');
app.use('/api', recipesRouter);

// Middleware para servir archivos estáticos (imágenes subidas)
app.use('/uploads', express.static(uploadsDir));

// Manejo de errores para rutas no encontradas
app.use((req, res) => {
  res.status(404).send({ message: 'Ruta no encontrada' });
});

// Iniciar el servidor
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
