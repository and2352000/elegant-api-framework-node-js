import Router from '@koa/router';
import { createOpenApiDocument } from '../lib/openapi';
import config from '../config';
export const openApiRouter = new Router();

openApiRouter.get('/', async (ctx) => {
    ctx.body = createOpenApiDocument(config.APP_NAME, `http://localhost:${config.PORT}`);
})


