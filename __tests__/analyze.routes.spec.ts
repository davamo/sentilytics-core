import request from 'supertest';
import app from '../src/app';

describe('GET /analyze', () => {
  it('debe retornar 200 OK', async () => {
    const res = await request(app).get('/analyze');
    expect(res.statusCode).toBe(200);
  });
});

