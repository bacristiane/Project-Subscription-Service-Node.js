import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as hbs from 'express-handlebars';
import { join } from 'path';
import { AppModule } from './app.module';
import { auth } from 'express-openid-connect'


async function bootstrap() {


  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  //handlebars
  app.useStaticAssets(join(__dirname, '../src', 'public'));
  app.setBaseViewsDir(join(__dirname, '../src', 'views'));
  app.engine('handlebars', hbs.engine())
  app.setViewEngine('handlebars');

  //auth0
  const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'b300e53d5313fddda72c854a18daaba257806b564c8db48eea47637f88f75b54',
    baseURL: 'http://localhost:3000',
    clientID:'hY4rFeTifhMXAAlOEhqjEka5INqEXVGR',
    issuerBaseURL: 'https://nodejs-demo.us.auth0.com',
  }
  app.use(auth(config));



  
  
  await app.listen(3000);
}
bootstrap();
