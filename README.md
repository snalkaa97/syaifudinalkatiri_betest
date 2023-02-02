
# Implement Auth JWT, Redis, Express, MongoDB

Middleware Authentication using JWT, and Redis Caching CRUD using Expres and MongoDB




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NODE_PORT`
`SECRET KEY`


## Install

To Install this project run

```bash
  npm install
```

If you haven't installed Redis, see the [Redis Documentation](https://developer.redis.com/howtos/quick-start) on your Operating System

And Run this project
```bash
  node server.js
```
## Caching Position

Controllers are defined at `controllers/userController.js`. Cached data is saved as JSON.stringify and loaded as JSON.parse
 - Set Cache from Redis (when C, U, D)
    - `getAll`
    - `create`
    - `udpate`
    - `delete`

