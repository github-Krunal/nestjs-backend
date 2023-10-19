import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { SchemaConstant } from 'src/constant/schema.constant';
import { IRegistration } from 'src/interface/registration.interface';
import { Registration } from 'src/schemas/registration.schema';

@Injectable()
export class AuthenticationService {
    constructor(@InjectModel(SchemaConstant.REGISTRATION) private registraionModel:mongoose.Model<Registration>){}
   async registerUser(user:Registration):Promise<Registration>{
        const res=await this.registraionModel.create(user);
        return res;
    }
   async login(user:Registration):Promise<IRegistration[]>{
        const res=await this.registraionModel.find(user);
        return res;
    }
}
