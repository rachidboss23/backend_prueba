# 🚀 Servidor Express + PostgreSQL CRUD Completo

Este proyecto es un **servidor backend básico** hecho con **Node.js**, **Express** y **PostgreSQL**, armado como práctica real para aprender a manejar un stack **Full Stack JS**.

---

## 📂 Estructura principal

- `index.js` → servidor Express con CRUD completo (`GET`, `POST`, `PUT`, `DELETE`).
- `.env.example` → ejemplo de variables de entorno.
- `.gitignore` → ignora `node_modules` y `.env` real.
- `package.json` → dependencias (`express`, `pg`, `dotenv`).
- `README.md` → guía clara para correrlo y entenderlo.

---

## ✅ Funcionalidad

- `GET /api/ping` → verifica que el servidor y la DB respondan.
- `GET /api/usuarios` → lista todos los usuarios.
- `POST /api/usuarios` → crea un usuario.
- `PUT /api/usuarios/:id` → actualiza un usuario existente.
- `DELETE /api/usuarios/:id` → elimina un usuario por ID.

---

## ⚙️ Configuración

1️⃣ Clona el repositorio:

```bash
git clone https://github.com/rachidboss23/PruebaCodigos.git
```

2️⃣ Instala dependencias:

```bash
npm install
```

3️⃣ Copia `.env.example` como `.env` y completa:

```env
DATABASE_URL=postgresql://USUARIO:CONTRASEÑA@localhost:5432/NOMBRE_DB
PORT=3000
```

4️⃣ Corre el servidor:

```bash
node index.js
```

5️⃣ Prueba rutas con Thunder Client o Postman.

---

## 🧪 Pruebas API (Thunder Client recomendado)

- **GET** `http://localhost:3000/api/usuarios` → Lista usuarios.
- **POST** `http://localhost:3000/api/usuarios` → Cuerpo JSON:
  ```json
  {
    "nombre": "Ana",
    "edad": 25
  }
  ```
- **PUT** `http://localhost:3000/api/usuarios/:id` → Actualiza usuario por ID.
- **DELETE** `http://localhost:3000/api/usuarios/:id` → Elimina usuario por ID.

---

## 🔑 Buenas prácticas

- `.gitignore` ignora `.env` y `node_modules`.
- `.env` **NO se sube**, se usa `.env.example`.
- `README.md` explica todo.

---

## 🧩 Guía para Juniors: ¿Qué debes saber de memoria?

✅ **1️⃣ ¿Qué debes saber de memoria como Junior?**

👉 NO necesitas memorizar cada línea exacta de:
- `npm init`
- `npm install`
- o `index.js` completo con `Express`, `Pool`, `dotenv`.

🔑 Lo que **SÍ** necesitas saber de memoria es:

### 🧩 **CONCEPTOS**

- **Qué hace cada cosa:**
  - `express` = framework para rutas.
  - `pg` = conecta Node con PostgreSQL.
  - `dotenv` = carga `.env`.

- **Cómo se estructura un servidor Express:**
  ```js
  app = express();
  app.use(express.json());
  app.listen(PORT, () => {...});
  ```

- **Qué es `req` y `res`:**
  - `req` trae datos del cliente.
  - `res` devuelve respuesta.

- **Qué hace `Pool` de `pg`:**
  - Crea conexión a tu DB.

- **Qué hace `.env`:**
  - Guarda credenciales/configuraciones sensibles.
  - `process.env` lo usa Node.

### 🧩 **SINTAXIS CLAVE**

- Saber armar una ruta `GET` y `POST`:
  ```js
  app.get("/ruta", (req, res) => {...})
  app.post("/ruta", (req, res) => {...})
  ```

- Saber un query SQL simple:
  ```sql
  SELECT * FROM tabla;
  INSERT INTO tabla (...);
  ```

👉 El resto: **se busca, se copia o se usa como plantilla**.

✅ **2️⃣ Qué se consulta siempre**

👀 Incluso devs senior revisan siempre:
- Comandos `psql` (`\c`, `\d`).
- Sintaxis exacta de `Pool`.
- `.env` → se copia siempre.

### 🧩 **Regla real: Saber la lógica**

Si entiendes **qué hace cada parte**, la sintaxis exacta es irrelevante → se copia.

✅ Tu foco: saber encadenar:
`request` → `ruta` → `query` → `response`.

Por eso los juniors usan **snippets**, ejemplos y documentación. 💪

---

## 🚀 ¡Listo para usar, mejorar y mostrar como práctica real de backend! 
