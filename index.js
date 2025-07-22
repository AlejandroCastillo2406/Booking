const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear JSON si lo necesitas
app.use(express.json());

// Ruta de ejemplo API
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hola desde backend!' });
});

// Servir archivos estáticos de React en producción
app.use(express.static(path.join(__dirname, 'client/build')));

// Enviar index.html para cualquier ruta que no sea API (SPA React)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
