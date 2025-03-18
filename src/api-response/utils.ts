import type Koa from 'koa'
import { type ErrorResponse } from './error'

export function generalResponse<T> (ctx: Koa.DefaultContext, data: T, metadata: Record<string, any> = {}): void {
  ctx.body = { code: 'success', ...metadata, data }
}

export function createErrorResponse (
  ctx: Koa.DefaultContext,
  errorResponse: ErrorResponse,
  data?: any
): void {
  ctx.status = errorResponse.status
  ctx.body = {
    code: errorResponse.code,
    message: errorResponse.data.message,
    ...(data ? { data } : {})
  }
}
