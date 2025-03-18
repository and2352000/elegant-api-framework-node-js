import { BaseResponse } from './base'

export class GeneralResponse<T> extends BaseResponse {
  public data: T
  constructor (data: T, status: number = 200) {
    super('success', status)
    this.data = data
  }
}
