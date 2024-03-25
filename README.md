## NestJS starter

## Installation

```bash
$ npm install
```

or using yarn

```bash
$ yarn
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Env configuration

```
NODE_ENV=development|production (optional enum NodeEnv, default development)
```

```
# express
API_PORT=3000 (optional number, default 3000)
API_HOST=0.0.0.0 (optional string, default 0.0.0.0)
```

```
# cors
CORS_ALLOWED_ORIGING=string (optional string, default *, for eg. http://localhost:3000, https://domain.com)
```

```
# throttler
THROTTLER_LIMIT=100 (optional number, default 100 - count of request in time window)
THROTTLER_TTL_S=60 (optional number, default 60 - time window)
```

```
# body parser
MAX_FILE_SIZE_KB=20971520 (optional number, default 20971520 - 20MB)
```

```
# morgan
USE_LOGS=boolean (optional boolean, default true)
```

```
# swagger config
USE_SWAGGER=true (optional boolean, default true)
SWAGGER_ROUTE=/swagger (required string, if USE_SWAGGER true)
```
