import { Injectable } from "@nestjs/common"
import { IPaymentType } from "./ipayment-type.interface"

@Injectable()
export class PaymentTypeWhats implements IPaymentType {
    getType(): string {
        return 'whatsapp'
    }
    
    payS(paymentDetails : any) {

        return "pagando com whatsapp"
    }

}