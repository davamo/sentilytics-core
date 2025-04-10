import  analyzeSentiment  from '../src/services/analyze.service';

describe('analyze.service', () => {
  it('debe retornar un resultado de análisis', () => {
    const result = analyzeSentiment('This is a test sentence.'); 
    expect(result).toBeDefined();
  });
});
