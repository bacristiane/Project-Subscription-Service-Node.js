import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Req, UseGuards } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { Request, Response } from 'express';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { PaymentService } from 'src/payment/payment.service';


@Controller()
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService, private readonly paymentService: PaymentService) {}


//functions
  @Post('subscription')
  create(@Body() paymentDetails: any, createSubscriptionDto: CreateSubscriptionDto, @Res() res: Response) {
   
    this.paymentService.pay(paymentDetails)
    
    this.subscriptionService.create(createSubscriptionDto)
    return res.redirect('/profile');
    
  }

  @Get('subscription/all')
  findAll() {
    return this.subscriptionService.findAll();
  }

  @Get('subscription/:id')
  findOne(@Param('id') id: string) {
    return this.subscriptionService.findOne(id);
  }

  @Patch('subscription/:id')
  update(@Param('id') id: string, @Body() updateSubscriptionDto: UpdateSubscriptionDto) {
    return this.subscriptionService.update(id, updateSubscriptionDto);
  }

  @Delete('subscription/:id')
  remove(@Param('id') id: string) {
    return this.subscriptionService.remove(id)
    ;
  }

  //views
  @Get()
  home(@Res() res: Response, @Req() req: Request) {
    const isAuthenticated = req.oidc.isAuthenticated()
    return res.render('front/home', { isAuthenticated })
  }
  @Get('plans')
  plans(@Res() res: Response, @Req() req: Request) {

    var user = {}

    if(req.oidc.user) {  user = {name: req.oidc.user.name,
      email: req.oidc.user.email,
      picture: req.oidc.user.picture ,
      subscription: req.body.subscription
  }}
      
    
    

    const isAuthenticated = req.oidc.isAuthenticated()
        res.render('front/plans', { isAuthenticated, user})
  }

  @Get('profile')
  profile(@Res() res: Response, @Req() req: Request) {

    
    const user = {name: req.oidc.user.name,
                  email: req.oidc.user.email,
                  picture: req.oidc.user.picture,
                  subscription: req.body.subscription || ''
    }

    const isAuthenticated = req.oidc.isAuthenticated()
    res.render('front/profile', { isAuthenticated, user }, )
  }

  
}
