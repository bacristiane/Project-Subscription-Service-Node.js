import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentModule } from './payment/payment.module';
import { SubscriptionModule } from './subscription/subscription.module';



@Module({
  imports: [PaymentModule, SubscriptionModule, MongooseModule.forRoot('mongodb://localhost:27017/nest')],
  controllers: [],
  providers: [],
})
export class AppModule {}
