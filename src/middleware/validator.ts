import { type Context, type Next } from 'koa'
import { createErrorResponse } from '../api-response/utils'
import { ZodError } from 'zod'
import { ErrorResponse } from '../api-response/error'
import { SchemaCheck } from 'type/api'



export function routerSchemaCheck (schema: SchemaCheck) {
  return async (ctx: Context, next: Next) => {
    try {
      if (schema.body) {
        ctx.request.body = schema.body.parse(ctx.request.body)
      }
      if (schema.query) {
        ctx.query = schema.query.parse(ctx.query)
      }
      if (schema.params) {
        ctx.params = schema.params.parse(ctx.params)
      }
      await next()
    } catch (error) {
      if (error instanceof ZodError) {
        createErrorResponse(ctx, new RouterSchemaCheckErrorResponse('Parameter validation failed'), error)
      } else {
        throw error
      }
    }
  }
}

class RouterSchemaCheckErrorResponse extends ErrorResponse {
  constructor (message: string) {
    super('router-schema/check-error', message, 400)
  }
}
