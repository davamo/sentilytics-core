import analyzeSentiment from '../src/services/analyze.service';

describe('analyzeSentiment', () => {
  it('retorna Positivo si el texto contiene palabras positivas', () => {
    const result = analyzeSentiment({}, {}, 'Estoy muy feliz hoy');
    expect(result).toEqual({ sentiment: 'Positivo', confidence: 0.9 });
  });

  it('retorna Negativo si el texto contiene palabras negativas', () => {
    const result = analyzeSentiment({}, {}, 'Hoy es un día muy malo');
    expect(result).toEqual({ sentiment: 'Negativo', confidence: 0.85 });
  });

  it('retorna Neutral si el texto no tiene palabras clave', () => {
    const result = analyzeSentiment({}, {}, 'Esto es una frase neutral');
    expect(result).toEqual({ sentiment: 'Neutral', confidence: 0.6 });
  });
});
