import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { Subscription, SubscriptionDocument } from './entities/subscription.entity';

@Injectable()
export class SubscriptionService {

  constructor(@InjectModel(Subscription.name) private subscriptionModel: Model<SubscriptionDocument>) {}

  async create(createSubscriptionDto: CreateSubscriptionDto) : Promise <Subscription> {
    const createdSubscription = new this.subscriptionModel(createSubscriptionDto);
    return createdSubscription.save();
  }

  findAll() {
    return this.subscriptionModel.find();
  }

  findOne(id: string) {
    return this.subscriptionModel.findById(id);
  }

  update(id: string, updateSubscriptionDto: UpdateSubscriptionDto) {
    return this.subscriptionModel.findByIdAndUpdate({
      _id:id,
    },{
      $set: updateSubscriptionDto,
    }, {
      new:true,
    })
  }

  remove(id: string) {
    return this.subscriptionModel.deleteOne({
      _id: id,
    }).exec()
  }
}
