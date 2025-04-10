import { Request, Response } from 'express';
import { analyzeSentiment } from '../services/analyze.service';

export const analyzeText = (req: Request, res: Response): void => {
  try {
    const { text } = req.body;

    if (typeof text !== 'string' || !text.trim()) {
      res.status(400).json({ error: 'Texto requerido para análisis.' });
      return;
    }

    const result = analyzeSentiment(text.trim());

    res.status(200).json({
      success: true,
      data: result,
    });

  } catch (error) {
    console.error('Error en el análisis de sentimiento:', error);
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
};
