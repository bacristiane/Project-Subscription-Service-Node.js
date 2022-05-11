import { Injectable } from "@nestjs/common"
import { IPaymentType } from "./ipayment-type.interface"

@Injectable()
export class PaymentTypeCreditCard implements IPaymentType {
    getType(): string {
        return 'creditcard'
    }
    
    payS(paymentDetails : any) {

    }

}