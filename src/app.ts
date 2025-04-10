import express from 'express';
import cors from 'cors';
import sentimentRoutes from './routes/analyze.routes';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.0',
    info: { title: 'Sentilytics API', version: '1.0.0' },
  },
  apis: ['./src/routes/*.ts'], // Ajusta según tu estructura
});

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(cors());
app.use(express.json());

app.use('/api/sentiment', sentimentRoutes);

app.get('/', (_req, res) => {
  res.send('🚀 Sentilytics Core funcionando con Express y TypeScript!');
});

export default app;
