import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RoutesConstant } from 'src/constant/routes.contact';
import { Registration } from 'src/schemas/registration.schema';
import { AuthenticationService } from 'src/services/authentication/authentication.service';

@Controller()
export class AuthenticationController {
    constructor(private authenticationService:AuthenticationService){}
   @Post(RoutesConstant.LOGIN)
   async getLogin(@Body() requestData:Registration){
    return this.authenticationService.login(requestData)
   }
   @Post(RoutesConstant.REGISTRATION)
  async createRegistration(@Body() requestData:Registration){
     const register= await this.authenticationService.registerUser(requestData);
     return register.Username?true:false
   }
}
