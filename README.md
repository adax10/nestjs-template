## NestJS starter

## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# test coverage
$ yarn test:cov
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
CORS_ALLOWED_ORIGING=string (optional string, default *, for eg. http://localhost:3000)
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

## Trivy Vulnerability Scan

Trivy is a comprehensive vulnerability scanner for containers and other artifacts. It's used in CI/CD pipelines to scan Docker images and code 🔐.

### Installation

1. Install trivy

```bash
yarn trivy-install
```

or:

```bash
curl -sfL https://raw.githubusercontent.com/aquasecurity/trivy/main/contrib/install.sh | sh -s -- -b /usr/local/bin
```

If you have any problems with installation, please refer to [documentation](https://trivy.dev/v0.57/getting-started/installation/).

2. Test code in your local machine

```bash
yarn trivy-file-scan
```

or:

```bash
trivy fs . --db-repository public.ecr.aws/aquasecurity/trivy-db \
          --java-db-repository public.ecr.aws/aquasecurity/trivy-java-db \
          --severity CRITICAL,HIGH \
          --db-repository public.ecr.aws/aquasecurity/trivy-db --java-db-repository public.ecr.aws/aquasecurity/trivy-java-db \
          --exit-code 1 \
          --scanners vuln,secret,config \
          --ignore-unfixed \
          --pkg-types os,library
```

3. Run trivy to scan the image

```bash
yarn trivy-image-scan
```

or:

```bash
# this command should be after docker build
trivy image --db-repository public.ecr.aws/aquasecurity/trivy-db \
          --java-db-repository public.ecr.aws/aquasecurity/trivy-java-db \
          --severity CRITICAL,HIGH \
          --db-repository public.ecr.aws/aquasecurity/trivy-db --java-db-repository public.ecr.aws/aquasecurity/trivy-java-db \
          --exit-code 1 \
          --ignore-unfixed \
          api-starter:latest
```

Optionally you can add `--format json` to get the output in JSON format.
