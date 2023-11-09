import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './controller/authentication/authentication.module';
import { FileuploadModule } from './controller/fileupload/fileupload.module';
import { PortfolioModule } from './controller/portfolio/portfolio.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/codeInnvoator'),
    AuthenticationModule,
    PortfolioModule,
    FileuploadModule,
   
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
