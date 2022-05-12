import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as hbs from 'express-handlebars';
import { join } from 'path';
import { AppModule } from './app.module';
import { auth } from 'express-openid-connect'


async function bootstrap() {


  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  //handlebars
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.engine('handlebars', hbs.engine())
  app.setViewEngine('handlebars');

  //auth0
  require('dotenv').config()
  const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.BASE_URL,
    clientID:process.env.CLIENT_ID,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
  }
  
  app.use(auth(config));



  
  
  await app.listen(3000);
}
bootstrap();
