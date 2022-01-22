const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx) => {
  ctx.body = '<h1>INDEX Sayfası </h1>'
});

router.get('/hakkimda', (ctx) => {
    ctx.body = '<h1>Hakkımda Sayfası </h1>'
  });

  router.get('/iletisim', (ctx) => {
    ctx.body = '<h1>İLETİŞİM Sayfası </h1>'
  });

app.use(router.routes())

let port=3000;
  app.listen(port,() => {
      console.log(`Koa server ${port} nolu portta çalışıyor`)
  })