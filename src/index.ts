import 'zod-openapi/extend';
import 'zod'
import Koa from 'koa';
import * as fs from 'fs';
import * as path from 'path';
import cors from '@koa/cors';
import Router from '@koa/router';
import bodyParser from 'koa-bodyparser';
import setupContainer from './setupContainer';
import config from './config';
import { userRouter } from './router/user';
import { openApiRouter } from './router/openapi';
import { register, schemas } from './lib/openapi';

const app = new Koa();

app.use(cors());
app.use(bodyParser());
const router = new Router();

async function bootstrap() {
   setupContainer();


  
  // 動態掃描所有路由文件
  const routerDir = path.join(__dirname, 'router');
  fs.readdirSync(routerDir).forEach(file => {
    if (file.endsWith('.ts') || file.endsWith('.js')) {
      const routerModule = require(path.join(routerDir, file));
      if (routerModule.schemas && routerModule.schemas.length > 0) {
        register(routerModule.schemas);
      }
    }
  });
  router.use('/user', userRouter.routes());
  router.use('/openapi', openApiRouter.routes());
  app.use(router.routes());

  app.listen(config.PORT, () => {
    console.log(`Server listening on port ${config.PORT}`);
  });
}

bootstrap();