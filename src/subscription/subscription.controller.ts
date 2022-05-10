import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Req, UseGuards } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { Request, Response } from 'express';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';


@Controller()
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}


//functions
  @Post('subscription')
  create(@Body() createSubscriptionDto: CreateSubscriptionDto) {
    return this.subscriptionService.create(createSubscriptionDto);
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
    return this.subscriptionService.remove(id);
  }

  //views
  @Get()
  home(@Res() res: Response, @Req() req: Request) {
    const isAuthenticated = req.oidc.isAuthenticated()
    return res.render('front/home', { isAuthenticated })
  }
  @Get('plans')
  plans(@Res() res: Response, @Req() req: Request) {
    const isAuthenticated = req.oidc.isAuthenticated()
        res.render('front/plans', { isAuthenticated })
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
