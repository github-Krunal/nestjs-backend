import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { FileuploadController } from './fileupload.controller';

@Module({
  controllers: [FileuploadController],
  imports:[
    MulterModule
  ]
})
export class FileuploadModule {}
