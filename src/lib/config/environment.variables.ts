import { IsBooleanString, IsInt, IsNumber, IsOptional, IsString, ValidateIf } from 'class-validator'
import { Type } from 'class-transformer'
import { toBoolean } from 'lib/utils'

export class EnvironmentVariables {
    @IsOptional()
    @IsString()
    readonly NODE_ENV: 'development' | 'production' = 'development'

    @IsOptional()
    @IsNumber()
    readonly API_PORT: number = 3000

    @IsOptional()
    @IsString()
    readonly API_HOST: string = 'localhost'

    @IsOptional()
    @IsString()
    readonly CORS_ALLOWED_ORIGINS: string = '*'

    @IsOptional()
    @IsString()
    readonly SERVICE_VERSION: string = 'unknown'

    @IsOptional()
    @IsInt()
    readonly THROTTLER_TTL_S: number = 60

    @IsOptional()
    @IsInt()
    readonly THROTTLER_LIMIT: number = 100

    // default 20 MB
    @IsOptional()
    @IsInt()
    readonly MAX_FILE_SIZE_KB: number = 20 * 1024 * 1024

    @Type(() => String)
    @IsBooleanString()
    readonly USE_LOGS: string = 'true'

    @Type(() => String)
    @IsBooleanString()
    readonly USE_SWAGGER: string = 'true'

    @ValidateIf(value => toBoolean(value.USE_SWAGGER))
    @IsString()
    readonly SWAGGER_ROUTE: string = '/swagger'
}
