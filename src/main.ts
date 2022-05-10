import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as hbs from 'express-handlebars';
import { join } from 'path';
import { AppModule } from './app.module';




async function bootstrap() {




  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '../src', 'public'));
  app.setBaseViewsDir(join(__dirname, '../src', 'views'));
  app.engine('handlebars', hbs.engine())
  app.setViewEngine('handlebars');
 



  
  
  await app.listen(3000);
}
bootstrap();
