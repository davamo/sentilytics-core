import { Request, Response } from 'express';
import { analyzeText } from '../src/controllers/analyze.controller';

describe('analyzeText controller', () => {
  it('debe retornar 200 y el análisis de sentimiento si el texto es válido', () => {
    const req = {
      body: { text: 'feliz' },
      headers: { 'user-agent': 'jest' },
      query: { lang: 'es' },
    } as unknown as Request;

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    analyzeText(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      data: {
        sentiment: 'Positivo',
        confidence: 0.9,
      },
    });
  });

  it('debe retornar 400 si el texto es inválido', () => {
    const req = {
      body: { text: '' }, 
      headers: {},
      query: {},
    } as unknown as Request;

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    analyzeText(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      error: 'Texto requerido para análisis.',
    });
  });

  it('debe retornar 500 si ocurre un error inesperado', () => {
    const req = {
      body: { text: 'algo' },
      headers: {},
      query: undefined, // esto forzará el error por typeof === 'string'
    } as unknown as Request;

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    // Forzamos un error lanzando excepción desde dentro
    const originalConsoleError = console.error;
    console.error = jest.fn(); // evita que el error se imprima en test

    analyzeText(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      error: 'Error interno del servidor.',
    });

    console.error = originalConsoleError; // restaurar
  });
});
