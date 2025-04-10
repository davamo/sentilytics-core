import express from 'express';
import cors from 'cors';
import sentimentRoutes from './routes/analyze.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/sentiment', sentimentRoutes);

app.get('/', (_req, res) => {
  res.send('🚀 Sentilytics Core funcionando con Express y TypeScript!');
});

export default app;
