const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 3000;

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'cultural_user',
  password: process.env.DB_PASSWORD || 'SuperSecretPassWord2026!',
  database: process.env.DB_NAME || 'reservas_sevilla',
  waitForConnections: true,
  connectionLimit: 10
});

app.use(express.json());

// Endpoint de estado
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

// Endpoint para consultar la base de datos
app.get('/eventos', (req, res) => {
  pool.query('SELECT * FROM eventos', (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`API escuchando en el puerto ${port}`);
});