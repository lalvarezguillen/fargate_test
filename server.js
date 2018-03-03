const process = require('process');
const koa = require('koa');


const port = process.env.FARGATE_TEST_PORT;
const env = process.env.FARGATE_TEST_ENV;
const app = new koa();

app.use(async ctx => ctx.body = `Hello from the ${env} environment!`);
app.listen(port)