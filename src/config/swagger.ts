import swaggerJSDoc from 'swagger-jsdoc';

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Sentilytics Core API',
      version: '1.0.0',
      description: 'Documentación de la API para análisis de Sentilytics',
    },
  },
  apis: ['./src/routes/*.ts'], // Agrega anotaciones tipo JSDoc en las rutas
});
