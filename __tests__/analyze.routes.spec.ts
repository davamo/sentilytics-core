import request from 'supertest';
import app from '../src/app';

describe('POST /analyze', () => {
  it('debe retornar 200 OK y análisis positivo', async () => {
    const res = await request(app)
      .post('/analyze')
      .send({ text: 'feliz' });

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      success: true,
      data: {
        sentiment: 'Positivo',
        confidence: 0.9,
      },
    });
  });

  it('debe retornar 400 si no se envía texto', async () => {
    const res = await request(app)
      .post('/analyze')
      .send({ text: '' });

    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({
      error: 'Texto requerido para análisis.',
    });
  });
});
