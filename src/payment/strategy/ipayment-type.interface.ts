
export interface IPaymentType {

    getType() : string

    payS(paymentDetails : any) : void
}
