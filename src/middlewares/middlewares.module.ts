import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { GeneralMiddlewareMiddleware } from './general-middleware.middleware';

@Module({})
export class MiddlewaresModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(GeneralMiddlewareMiddleware).forRoutes({
            path: '*',
            method: RequestMethod.GET
        });
    }
}
