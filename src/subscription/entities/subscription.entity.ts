import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type SubscriptionDocument = Subscription & Document;

@Schema()
export class Subscription {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  picture: string;

  @Prop()
  subscription: string;
}

export const SubscriptionSchema = SchemaFactory.createForClass(Subscription);