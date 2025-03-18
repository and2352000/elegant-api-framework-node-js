import { BaseResponse } from './base'

export class ErrorResponse extends BaseResponse {
  public data: { message: string }
  constructor (code: string, message: string, status: number = 500) {
    super(code, status)
    this.data = { message }
  }
}

export class BadRequestErrorResponse extends ErrorResponse {
  constructor (code: string, message: string) {
    super(code, message, 400)
  }
}
