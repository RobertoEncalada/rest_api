const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/suppliers.js']

swaggerAutogen(outputFile, endpointsFiles)