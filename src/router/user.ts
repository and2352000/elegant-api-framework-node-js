import Router from '@koa/router';
import { container } from '../lib/container';
import { routerSchemaCheck } from '../middleware/validator';
import { z } from 'zod';
import { OpenApiSchema } from '../type/openapi';
export const userRouter = new Router();
export const postUserSchema = {
    path: '/user',
    method: 'post',
    tags: ['user'],
    body: z.object({
        name: z.string()
    }),
}

userRouter.post('/', routerSchemaCheck(postUserSchema), async (ctx) => {
    const body = ctx.request.body as z.infer<typeof postUserSchema.body>;
    const user = await container.resolve('userService').createUser(body.name)
    ctx.body = user;
})

export const getUserSchema: OpenApiSchema = {
  path: '/user',
  tags: ['user'],
  method: 'get',
}

userRouter.get('/', routerSchemaCheck(getUserSchema), async (ctx) => {
    const users = await container.resolve('userService').getUsers();
    ctx.body = users;
  })

export  const getUserByIdSchema: OpenApiSchema = {
  path: '/user/{id}',
  method: 'get',
  tags: ['user'],
  params: z.object({
      id: z.string().transform(val=> parseInt(val))
    })
  }

userRouter.get('/:id', routerSchemaCheck(getUserByIdSchema), async (ctx) => {
    const id = ctx.params.id;
    const user = await container.resolve('userService').getUserById(id)
    ctx.body = user;
})

export const schemas = [
  postUserSchema,
  getUserSchema,
  getUserByIdSchema
];