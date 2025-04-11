
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

```
src/
├── config/              # Configuración de entorno y Swagger
├── controllers/         # Lógica de rutas
├── routes/              # Definición de endpoints
├── services/            # Lógica de negocio (análisis)
├── __tests__/           # Pruebas unitarias y de integración
├── app.ts               # Configuración de Express
└── index.ts             # Punto de entrada (server)
```

---

## 🧪 Scripts

| Comando                | Descripción                        |
|------------------------|------------------------------------|
| `npm run dev`          | Ejecuta el servidor en modo dev    |
| `npm run test`         | Ejecuta las pruebas con Jest       |
| `npm run build`        | Compila TypeScript a JavaScript    |
| `npm start`            | Ejecuta el servidor en producción  |

---

## 📤 Endpoints API

### `POST /analyze`

Analiza texto y devuelve el resultado del sentimiento.

#### Request:

```json
{
  "text": "Me encanta este producto"
}
```

#### Response:

```json
{
  "success": true,
  "data": {
    "sentiment": "Positivo",
    "confidence": 0.9
  }
}
```

---

## 🧪 Pruebas con Jest

El proyecto incluye pruebas con `supertest` para endpoints.

Ejecuta con:

```bash
npm run test
```

Ejemplo de prueba:

```ts
expect(res.statusCode).toBe(200);
expect(res.body.data.sentiment).toBe('Positivo');
```

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
- [x] Documentar API con Swagger ✅

---

## 📍 Autor

Desarrollado por [davamo](mailto:davamo@davamo.cl)  
GitHub: [https://github.com/davamo/sentilytics-core](https://github.com/davamo/sentilytics-core)

---

## 🚀 Simulación Local y Despliegue en Azure (hipotético)

Este proyecto fue probado localmente utilizando Express + MongoDB, y también puede ser ejecutado en Docker. A futuro, puede desplegarse en:

- **App Service (Node.js)**
- **Blob Storage para archivos**
- **CosmosDB o MongoDB Atlas**
- CI/CD con **GitHub Actions**

---

### 🧪 Ejecución local

#### Requisitos:
- Node.js v18+
- MongoDB local o Atlas

```bash
git clone https://github.com/davamo/sentilytics-core.git
cd sentilytics-core
npm install
npm run dev
```

Accede a la API: http://localhost:5000/api/analysis

---

### 🐳 Ejecución con Docker

#### Dockerfile

```Dockerfile
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "run", "dev"]
EXPOSE 5000
```

```bash
docker build -t sentilytics-api .
docker run -p 5000:5000 sentilytics-api
```

---

### ☁️ Despliegue hipotético en Azure

#### Servicios recomendados:

| Servicio Azure       | Descripción breve                                   |
|----------------------|-----------------------------------------------------|
| App Service          | Para desplegar el backend Node.js                   |
| Blob Storage         | Para almacenar imágenes subidas desde el frontend   |
| Cosmos DB / MongoDB Atlas | Para base de datos en la nube                  |
| GitHub Actions       | Para automatizar despliegues (CI/CD)                |

#### GitHub Actions: `.github/workflows/deploy.yml`

```yaml
name: Azure Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - run: npm install
      - run: npm run build

      - name: Deploy to Azure Web App
        uses: azure/webapps-deploy@v2
        with:
          app-name: sentilytics-core
          publish-profile: ${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}
          package: .
```

---

### 🔧 Configuración recomendada en Azure App Service

- Node versión 18+
- Variables de entorno como `MONGO_URI`
- Conexión a GitHub y despliegue desde rama `main`
- Configuración de almacenamiento para imágenes (Blob Storage)

---
