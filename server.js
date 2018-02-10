const process = require('process');
const server = require('server');
const { get, post } = server.router;



server({ port: process.env.fargate_test_port || 80 }, 
    get('/', ctx => 'Hello, from Fargate!'))
