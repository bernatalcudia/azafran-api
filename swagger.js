const swaggerAutogen = require('swagger-autogen')

const doc = {
    info: {
        title: 'Azafran-API',
        description: 'API Azafran recipes'
    },
    host: 'localhost:8000'

}

const outputFile = './swagger-output.json'
const routes = ['./index.js']

swaggerAutogen(outputFile, routes, doc)