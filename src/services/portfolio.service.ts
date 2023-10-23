import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { SchemaConstant } from 'src/constant/schema.constant';
import { IPortfolio } from 'src/interface/portfolio.interface';
import { ObjectId } from "mongodb";

@Injectable()
export class PortfolioService {
    constructor(@InjectModel(SchemaConstant.PORTFOLIO) private portfolioModel:mongoose.Model<IPortfolio>){}
   async createPortfolio(portfolio:IPortfolio):Promise<boolean>{
        const res=await this.portfolioModel.create(portfolio);
        return res._id?true:false
    }
    async getPortfolio():Promise<IPortfolio>{
        const res=await this.portfolioModel.findOne()
        return res
    }
    async updatePortfolio(portfolio: IPortfolio): Promise<IPortfolio> {
        const res = await this.portfolioModel.findByIdAndUpdate(new ObjectId(portfolio.RecordID), {
            $set: portfolio
        }, {
            new: true
        })
        return res
    }
}
