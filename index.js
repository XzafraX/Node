import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Obtener la ruta absoluta del archivo actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurar la carpeta 'public' como estática
app.use(express.static(path.join(__dirname, 'public')));

// Servir el archivo index.html cuando se accede a la raíz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar el servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});
