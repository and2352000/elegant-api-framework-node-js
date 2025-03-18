import { createDocument } from "zod-openapi";
import { OpenApiSchema } from "../type/openapi";
import R from 'ramda'
const schemas: OpenApiSchema[] = [];

function register(openApiSchemas: OpenApiSchema[]) {
    schemas.push(...openApiSchemas);
}

function createOpenApiDocument(appName: string, host: string) {
   const schemaGroupsByPath= R.groupBy(R.prop('path'), schemas)
   const pathKeys = R.keys(schemaGroupsByPath)
   const paths: Record<string, Record<string, any>> = {}

   for(const p of pathKeys) {
    const schemaPathGroup = schemaGroupsByPath[p]!
     for(const schema of schemaPathGroup) {
      if(paths[p] === undefined)  paths[p] = {}

      const requestBody = schema.body ? {
        content: {
          'application/json': { schema: schema.body }
        }
      } : undefined

      const requestParams = (schema.params || schema.query )? {
        ...(schema.params ? { path: schema.params } : {}),
        ...(schema.query ? { query: schema.query } : {}),
      } : undefined

      paths[p][schema.method] = {
        tags: schema.tags ?? [],
        ...(requestBody ? { requestBody } : {}),
        ...(requestParams ? { requestParams } : {}),
        responses: {
          '200': {
            description: 'Success'
          }
        }
      }
      
    }
   }
   return createDocument({
    openapi: '3.1.0',
    info: {
      title: appName,
      version: '1.0.0',
    },
    paths,
    servers: [
      {
        url: host,
        description: 'Local Development'
      }
    ]
   })
}

export { register, schemas, createOpenApiDocument };

