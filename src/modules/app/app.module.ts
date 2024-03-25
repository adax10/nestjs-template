import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'
import { ThrottlerGuard, ThrottlerModule, seconds } from '@nestjs/throttler'
import { ConfigModule } from '@nestjs/config'
import { getConfig, envValidation } from 'lib/config'
import { HealthCheckModule } from 'modules/health-check'
import { AppService } from './app.service'

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            validate: envValidation,
            validationOptions: {
                allowUnknown: true,
                abortEarly: true
            }
        }),
        ThrottlerModule.forRoot({
            throttlers: [
                {
                    ttl: seconds(getConfig().basicConfig.throttlerConfig.ttlS),
                    limit: getConfig().basicConfig.throttlerConfig.limit
                }
            ]
        }),
        HealthCheckModule
    ],
    providers: [
        AppService,
        {
            provide: APP_GUARD,
            useClass: ThrottlerGuard
        }
    ]
})
export class AppModule {}
