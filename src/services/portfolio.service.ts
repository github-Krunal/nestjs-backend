import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { SchemaConstant } from 'src/constant/schema.constant';
import { IPortfolio } from 'src/interface/portfolio.interface';
import { ObjectId } from "mongodb";
import { Project } from 'src/schemas/project.schema';
import { IProject } from 'src/interface/project.interface';
import { Experience } from 'src/schemas/experience.schema';
import { IExperiece } from 'src/interface/experience.interface';

@Injectable()
export class PortfolioService {
    constructor(@InjectModel(SchemaConstant.PORTFOLIO) private portfolioModel:mongoose.Model<IPortfolio>
    ,@InjectModel(SchemaConstant.PROJECT) private projectModel:mongoose.Model<Project>,@InjectModel(SchemaConstant.EXPERIENCE) private experienceModel:mongoose.Model<IExperiece>){}
   async createPortfolio(portfolio:IPortfolio):Promise<boolean>{
        const res=await this.portfolioModel.create(portfolio);
        return res._id?true:false
    }
    async getPortfolio(CreatedByGuid:string):Promise<IPortfolio>{
        const res = await this.portfolioModel.find({ CreatedByGuid: CreatedByGuid });
        return res[0]
    }

    async updatePortfolio(portfolio: IPortfolio): Promise<IPortfolio> {
        const res = await this.portfolioModel.findByIdAndUpdate(new ObjectId(portfolio.RecordID), {
            $set: portfolio
        }, {
            new: true
        })
        return res
    }
    async updateExperience(experience: IExperiece): Promise<IExperiece> {
        const res = await this.experienceModel.findByIdAndUpdate(new ObjectId(experience.RecordID), {
            $set: experience
        }, {
            new: true
        })
        return res
    }
    async createProject(projects:Project[]):Promise<boolean>{
        const res=await this.projectModel.insertMany(projects);
        return true
    }
    async createExperience(experiences:Experience[]):Promise<boolean>{
        const res=await this.experienceModel.insertMany(experiences);
        return true
    }
    async getProject(CreatedByGuid:string):Promise<IProject[]>{
        const res = await this.projectModel.find({ CreatedByGuid: CreatedByGuid });
        return res
    }
    async getExperience(CreatedByGuid:string):Promise<IExperiece[]>{
        const res = await this.experienceModel.find({ CreatedByGuid: CreatedByGuid });
        return res
    }
}
