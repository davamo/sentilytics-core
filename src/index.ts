import express from 'express';
import cors from 'cors';
import './config/dotenv.config';
import analyzeRoutes from './routes/analyze.routes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:5173', // Cambia esta URL por la del frontend correcto
  methods: 'GET, POST, PUT, DELETE, OPTIONS',
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

app.use('/analyze', analyzeRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
