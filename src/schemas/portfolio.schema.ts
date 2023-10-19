import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps:true
})

export class Portfolio{
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
}

const schema=SchemaFactory.createForClass(Portfolio);
export const portfolioSchema=schema;