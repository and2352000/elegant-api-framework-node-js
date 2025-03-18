import { ZodSchema } from "zod";

export interface Options {
    page: number;
    limit: number;
}

 export interface SchemaCheck {
    body?: ZodSchema
    query?: ZodSchema
    params?: ZodSchema
  }
  