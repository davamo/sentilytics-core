import express from 'express';
import cors from 'cors';
import './config/dotenv.config';
import analyzeRoutes from './routes/analyze.routes';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec  from './config/swagger'; // Ajusta si está en otro path

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:5173', // Cambia esta URL por la del frontend correcto
  methods: 'GET, POST, PUT, DELETE, OPTIONS',
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

app.use('/analyze', analyzeRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
