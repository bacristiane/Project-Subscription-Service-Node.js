import { Module } from '@nestjs/common';
import { PaymentModule } from './payment/payment.module';
import { SubscriptionModule } from './subscription/subscription.module';



@Module({
  imports: [PaymentModule, SubscriptionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
