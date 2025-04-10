export const analyzeSentiment = (text: string) => {
    const lowered = text.toLowerCase();
  
    if (lowered.includes('feliz') || lowered.includes('bueno')) {
      return { sentiment: 'Positivo', confidence: 0.9 };
    } else if (lowered.includes('triste') || lowered.includes('malo')) {
      return { sentiment: 'Negativo', confidence: 0.85 };
    } else {
      return { sentiment: 'Neutral', confidence: 0.6 };
    }
  };
  