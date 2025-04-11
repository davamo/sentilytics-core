// src/app.ts
import express from 'express';
import cors from 'cors';
import analyzeRoutes from './routes/analyze.routes';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET, POST, PUT, DELETE, OPTIONS',
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

app.use('/analyze', analyzeRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
