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
    MongooseModule.forRoot('mongodb+srv://kkumbhare4912:mEqAfFRKU9X9VdgV@cluster0.kt1pf6y.mongodb.net/codeInnvoator?retryWrites=true&w=majority'),
    AuthenticationModule,
    PortfolioModule,
    FileuploadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
