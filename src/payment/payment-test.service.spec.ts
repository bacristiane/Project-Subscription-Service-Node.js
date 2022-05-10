import { Test, TestingModule } from '@nestjs/testing';
import { PaymentService } from '../payment/payment.service';

describe('PaymentService', () => {
  let paymentService: PaymentService;

  const mockPaymentType = {
    payS: jest.fn((paymentDetails) => {
      return 'pagando com ****';
    }),
    getType: () => 'creditcard'
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentService,  {
        provide: 'PAYMENT_TYPE',
        useValue: [mockPaymentType] 
      }]

    }).compile();

    paymentService = module.get<PaymentService>(PaymentService);
    
  });

  it('should be defined', () => {
    expect(paymentService).toBeDefined();
  });

  it('should return a pay action', () => {
    expect(paymentService.pay({"type":"creditcard"})).toEqual('pagando com ****')
  })
});
