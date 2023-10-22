import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './controller/authentication/authentication.module';
import { PortfolioModule } from './controller/portfolio/portfolio.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/codeInnvoator'),
    AuthenticationModule,
    PortfolioModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
