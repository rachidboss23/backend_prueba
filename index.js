// 1️⃣ Importa módulos
const express = require("express");
const { Pool } = require("pg");
require("dotenv").config();

// 2️⃣ Configura Express
const app = express();
const PORT = process.env.PORT || 3000;

// 3️⃣ Middleware para JSON
app.use(express.json());

// 4️⃣ Configura Pool de PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// 5️⃣ Ruta básica
app.get("/api/ping", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.status(200).json({ mensaje: "Servidor OK", hora: result.rows[0] });
  } catch (err) {
    console.error("Error de conexión:", err);
    res.status(500).json({ error: "No se pudo conectar a PostgreSQL" });
  }
});

// GET: Traer todos los usuarios
app.get("/api/usuarios", async (req, res) => {
  try {
    const resultado = await pool.query("SELECT * FROM usuarios");
    res.status(200).json(resultado.rows);
  } catch (err) {
    console.error("Error al obtener usuarios:", err);
    res.status(500).json({ error: "Error del servidor" });
  }
});

// POST: Agregar usuario nuevo
app.post("/api/usuarios", async (req, res) => {
  const { nombre, edad } = req.body;
  if (!nombre || !edad) {
    return res.status(400).json({ error: "Faltan datos" });
  }
  try {
    const resultado = await pool.query(
      "INSERT INTO usuarios (nombre, edad) VALUES ($1, $2) RETURNING *",
      [nombre, edad]
    );
    res.status(201).json(resultado.rows[0]);
  } catch (err) {
    console.error("Error al insertar:", err);
    res.status(500).json({ error: "Error del servidor" });
  }
});

// PUT: Actualizar usuario existente
app.put("/api/usuarios/:id", async (req, res) => {
  const { id } = req.params;
  const { nombre, edad } = req.body;
  if (!nombre || !edad) {
    return res.status(400).json({ error: "Faltan datos" });
  }
  try {
    const resultado = await pool.query(
      "UPDATE usuarios SET nombre = $1, edad = $2 WHERE id = $3 RETURNING *",
      [nombre, edad, id]
    );
    if (resultado.rows.length === 0) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.status(200).json(resultado.rows[0]);
  } catch (err) {
    console.error("Error al actualizar:", err);
    res.status(500).json({ error: "Error del servidor" });
  }
});

// DELETE: Borrar usuario por ID
app.delete("/api/usuarios/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const resultado = await pool.query(
      "DELETE FROM usuarios WHERE id = $1 RETURNING *",
      [id]
    );
    if (resultado.rows.length === 0) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.status(200).json({ mensaje: "Usuario eliminado", usuario: resultado.rows[0] });
  } catch (err) {
    console.error("Error al eliminar:", err);
    res.status(500).json({ error: "Error del servidor" });
  }
});

// 6️⃣ Levanta servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
