# Startup
```bash
npm install
npm run dev
```

# Create User
```bash
curl -X POST http://localhost:6969/user -H "Content-Type: application/json" -d '{"name": "Aaron H"}'
```

# Get Users
```bash
curl http://localhost:6969/user
```

# Get User By Id
```bash
curl http://localhost:6969/user/1
```