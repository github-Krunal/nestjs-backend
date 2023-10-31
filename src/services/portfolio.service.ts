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
import { Contact } from 'src/schemas/contact.schema';
import { IContact } from 'src/interface/contact.interface';

@Injectable()
export class PortfolioService {
    constructor(@InjectModel(SchemaConstant.PORTFOLIO) private portfolioModel:mongoose.Model<IPortfolio>
    ,@InjectModel(SchemaConstant.PROJECT) private projectModel:mongoose.Model<IProject>,@InjectModel(SchemaConstant.EXPERIENCE) private experienceModel:mongoose.Model<IExperiece>,@InjectModel(SchemaConstant.CONTACT) private contactSchemaModel:mongoose.Model<IContact>){}
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
    async updateProject(project: IProject): Promise<IProject> {
        const res = await this.projectModel.findByIdAndUpdate(new ObjectId(project.RecordID), {
            $set: project
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
    async createContact(contact:IContact):Promise<boolean>{
        const res=await this.contactSchemaModel.create(contact);
        return true
    }
    async getContact(CreatedByGuid:string):Promise<IContact[]>{
        const res = await this.contactSchemaModel.find({ CreatedByGuid: CreatedByGuid });
        return res
    }
}
