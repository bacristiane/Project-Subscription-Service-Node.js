import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { SubscriptionController } from './subscription.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Subscription, SubscriptionSchema } from './entities/subscription.entity';
import { requiresAuth } from 'express-openid-connect';

@Module({
  imports: [MongooseModule.forFeature([{ name: Subscription.name, schema: SubscriptionSchema }])],
  controllers: [SubscriptionController],
  providers: [SubscriptionService]
})
export class SubscriptionModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(requiresAuth())
      .exclude(
        { path: '', method: RequestMethod.GET },
        { path: 'plans', method: RequestMethod.GET },
      )
      .forRoutes(SubscriptionController);
  }
}
