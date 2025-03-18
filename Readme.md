# Startup
```bash
npm install
npm run dev
```

# Features
The purpose of Elegant api framework is to provide a simple and easy way to build api and api documentation and also testing.
- use zod for schema validation
- use zod-openapi to generate api documentation automatically
- use awilix for dependency injection



## SDK Include
- Koa
- awilix
- zod
- zod-openapi

# Test
## Create User
```bash
curl -X POST http://localhost:6969/user -H "Content-Type: application/json" -d '{"name": "Aaron H"}'
```

## Get Users
```bash
curl http://localhost:6969/user
```

## Get User By Id
```bash
curl http://localhost:6969/user/1
```

# OpenAPI
Get openapi json and paste into any openapi editor to see the api documentation. (e.g. https://editor.swagger.io/)
```bash
curl http://localhost:6969/openapi
```




