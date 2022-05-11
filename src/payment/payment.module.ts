import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { PaymentTypeCreditCard } from './strategy/payment-type-creditcard';
import { PaymentTypePix } from './strategy/payment-type-pix';
import { IPaymentType } from './strategy/ipayment-type.interface';
import { PaymentTypeWhats } from './strategy/payment-type-whats';


@Module({
  controllers: [PaymentController],
  providers: [PaymentService, PaymentTypeCreditCard, PaymentTypePix, PaymentTypeWhats,{
    provide: 'PAYMENT_TYPE',
    useFactory: (...payments: IPaymentType[]) => payments,
    inject: [PaymentTypeCreditCard, PaymentTypePix, PaymentTypeWhats]
  }],
  exports: [PaymentService]

})
export class PaymentModule {}
