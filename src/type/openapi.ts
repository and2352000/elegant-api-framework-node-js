import { SchemaCheck } from './api'

export interface OpenApiSchema extends SchemaCheck {
 path: string;
 method: 'get' | 'post' | 'put' | 'delete';
 tags?: string[];
}