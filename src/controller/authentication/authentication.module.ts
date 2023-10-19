import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SchemaConstant } from 'src/constant/schema.constant';
import { registationSchema } from 'src/schemas/registration.schema';
import { AuthenticationService } from 'src/services/authentication/authentication.service';
import { AuthenticationController } from './authentication.controller';

@Module({
  imports:[MongooseModule.forFeature([
    {
      name:SchemaConstant.REGISTRATION,
      schema:registationSchema
    }
  ])],
  controllers: [AuthenticationController],
  providers:[AuthenticationService]
})
export class AuthenticationModule {}
