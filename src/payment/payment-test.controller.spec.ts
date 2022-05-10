import { Test, TestingModule } from '@nestjs/testing';
import { PaymentController } from '../payment/payment.controller'
import { PaymentService } from '../payment/payment.service';

describe('PaymentController', () => {
  let paymentController: PaymentController;

  const mockPaymentService = {

    pay: jest.fn((paymentDetails) => {
        return 'pagando com ****';
      })
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentController],
      providers: [PaymentService],
    }).overrideProvider(PaymentService).useValue(mockPaymentService).compile();

    paymentController = module.get<PaymentController>(PaymentController);
  });

  it('should be defined', () => {
    expect(paymentController).toBeDefined();
  });

  it('should send a pay action', () => {
    expect(paymentController.pay({"type":"creditcard"})).toEqual('pagando com ****')

    

  })
});
