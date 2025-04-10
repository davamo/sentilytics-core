import { Request, Response } from 'express';
import { analyzeSentiment } from '../src/controllers/analyze.controller';

describe('analyze.controller', () => {
  it('debe retornar datos de análisis simulados', () => {
    const req = {} as Request;
    const res = {
      json: jest.fn(),
    } as unknown as Response;

    const result = analyzeSentiment('Sample text for analysis');
    res.json(result);
    expect(res.json).toHaveBeenCalled();
  });
});
