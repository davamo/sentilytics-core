
import { Router } from 'express';
import { analyzeText } from '../controllers/analyze.controller';

const router = Router();

router.post('/', analyzeText);

/**
 * @swagger
 * /analyze:
 *   post:
 *     summary: Analiza texto y devuelve sentimiento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *     responses:
 *       200:
 *         description: Resultado del análisis de sentimiento
 */
router.post('/analyze', analyzeText);



export default router;
