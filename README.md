
# Sentilytics-Core 🧠

Backend para el análisis de sentimientos a partir de texto (y opcionalmente imágenes), construido con **Node.js**, **Express**, **TypeScript**, y pruebas con **Jest + Supertest**.

---

## 🚀 Características

- API RESTful para análisis de sentimientos.
- Servicio de análisis local (librería `sentiment`) o integrable con servicios externos.
- Pruebas unitarias con Jest.
- Listo para MongoDB y almacenamiento de historial.
- Separación clara por capas: controladores, servicios, rutas y configuración.
- Preparado para integración con frontend React u otro cliente.

---

## 📦 Estructura del Proyecto

\`\`\`
src/
├── config/              # Configuración de entorno y Swagger
├── controllers/         # Lógica de rutas
├── routes/              # Definición de endpoints
├── services/            # Lógica de negocio (análisis)
├── __tests__/           # Pruebas unitarias y de integración
├── app.ts               # Configuración de Express
└── index.ts             # Punto de entrada (server)
\`\`\`

---

## 🧪 Scripts

| Comando                | Descripción                        |
|------------------------|------------------------------------|
| \`npm run dev\`          | Ejecuta el servidor en modo dev    |
| \`npm run test\`         | Ejecuta las pruebas con Jest       |
| \`npm run build\`        | Compila TypeScript a JavaScript    |
| \`npm start\`            | Ejecuta el servidor en producción  |

---

## 📤 Endpoints API

### \`POST /analyze\`

Analiza texto y devuelve el resultado del sentimiento.

#### Request:

\`\`\`json
{
  "text": "Me encanta este producto"
}
\`\`\`

#### Response:

\`\`\`json
{
  "success": true,
  "data": {
    "sentiment": "Positivo",
    "confidence": 0.9
  }
}
\`\`\`

---

## 🧪 Pruebas con Jest

El proyecto incluye pruebas con \`supertest\` para endpoints.

Ejecuta con:

\`\`\`bash
npm run test
\`\`\`

Ejemplo de prueba:

\`\`\`ts
expect(res.statusCode).toBe(200);
expect(res.body.data.sentiment).toBe('Positivo');
\`\`\`

---

## ⚙️ Tecnologías Utilizadas

- Node.js
- TypeScript
- Express.js
- Jest + Supertest
- MongoDB (opcional)
- dotenv
- CORS

---

## 📄 To-Do

- [ ] Guardar historial de análisis en MongoDB
- [ ] Subir y analizar imágenes
- [ ] Desplegar en Azure / Render / Railway
- [ ] Documentar API con Swagger

---

## 📍 Autor

Desarrollado por [davamo](mailto:davamo@davamo.cl)  
GitHub: [https://github.com/davamo/sentilytics-core](https://github.com/davamo/sentilytics-core)

---
