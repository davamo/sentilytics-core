import swaggerJSDoc from 'swagger-jsdoc';

const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Sentilytics API',
      version: '1.0.0',
      description: 'Documentación Swagger para Sentilytics Core',
    },
  },
  apis: ['./src/routes/*.ts'], // Asegúrate que apunte a donde están tus @swagger
});

export default swaggerSpec;