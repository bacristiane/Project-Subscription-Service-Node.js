import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentService } from './payment.service';


@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {

  }

  @Post()
  pay(@Body() paymentDetails: any) {
    
    return this.paymentService.pay(paymentDetails);
    
  }

}
