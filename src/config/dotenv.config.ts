import dotenv from 'dotenv';

dotenv.config();

if (!process.env.PORT) {
  console.warn('⚠️  No se encontró la variable PORT en el archivo .env');
}
