import { Injectable } from "@nestjs/common"
import { IPaymentType } from "./ipayment-type.interface"

@Injectable()
export class PaymentTypePix implements IPaymentType {
    getType(): string {
        return 'pix'
    }
    
    payS(paymentDetails : any) {


        return "pagando com pix"
    }

}