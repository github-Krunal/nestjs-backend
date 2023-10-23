import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({
    timestamps:true,
    toJSON:{
        transform: function (doc: any, ret: any) {
            ret.RecordID = ret._id
            delete ret._id
            delete ret.__v;
            return ret;
          },
    }
})

export class Portfolio extends Document{
    @Prop()
    PortfolioTitle:string;
    @Prop()
    MainSkill:string
    @Prop()
    BannerImage:string
    @Prop()
    CreateTextDescription:string
    @Prop()
    AboutMeDescription:string
    @Prop()
    FirstName:string
    @Prop()
    LastName:string
    @Prop()
    Overview:string
    @Prop()
    RoleTitle:string
    @Prop()
    Address:string
    @Prop()
    Age:string
    @Prop()
    Phone:string
    @Prop()
    Nationality:string
    @Prop()
    Email:string
    @Prop()
    Freelance:string
    @Prop()
    Languages:string
    @Prop()
    PersonImage:string
    @Prop()
    Skills:string
    @Prop()
    MySkillDescription:string
    @Prop()
    ExperienceDescription:string
    @Prop()
    ContactDescription:string
    @Prop()
    CreatedByGuid:string
}

const schema=SchemaFactory.createForClass(Portfolio);
export const portfolioSchema=schema;