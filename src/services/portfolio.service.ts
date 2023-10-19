import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { SchemaConstant } from 'src/constant/schema.constant';
import { IRegistration } from 'src/interface/registration.interface';
import { Portfolio } from 'src/schemas/portfolio.schema';
import { Registration } from 'src/schemas/registration.schema';

@Injectable()
export class PortfolioService {
    constructor(@InjectModel(SchemaConstant.PORTFOLIO) private portfolioModel:mongoose.Model<Portfolio>){}
   async createPortfolio(portfolio:Portfolio):Promise<string>{
        const res=await this.portfolioModel.create(portfolio);
        return res._id?"success":null
    }
    async getPortfolio():Promise<Portfolio>{
        const res=await this.portfolioModel.findOne()
        return res
    }
}
