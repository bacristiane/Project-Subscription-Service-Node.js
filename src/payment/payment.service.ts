import { Inject, Injectable } from '@nestjs/common';
import { IPaymentType} from './strategy/ipayment-type.interface';


@Injectable()
export class PaymentService {

  paymentTypesMap : Map<string, IPaymentType> = new Map<string, IPaymentType>();

  constructor(@Inject('PAYMENT_TYPE')private readonly paymentTypes : IPaymentType[]

  ) {
    this.paymentTypesMap = paymentTypes.reduce((theMap, currentValue) => {
     
      theMap.set(currentValue.getType(), currentValue) 
      return theMap;
      
  }, new Map<string, IPaymentType>())
  }


  pay(paymentDetails : any){
    const paymentProcessor = this.paymentTypesMap.get(paymentDetails.type)
    if (paymentProcessor) return paymentProcessor.payS(paymentDetails)
    else throw new Error("can't handle that payment type")
} 

}
