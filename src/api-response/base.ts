export class BaseResponse {
  public status: number
  public code: string

  constructor (code: string, status: number = 200) {
    this.status = status
    this.code = code
  }
}
