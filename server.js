const server = require('server');
const { get, post } = server.router;


server({ port: 8080 }, 
    get('/', ctx => 'Hello, from Fargate!'))
