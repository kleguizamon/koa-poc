const Koa = require('koa');
const Router = require('koa-router');
const respond = require('koa-respond');

const app = new Koa();
const router = new Router();

app.use(respond());

router.get('/test', (ctx) => {
	ctx.ok('HI :)');
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
	console.log('server run');
});
