import { IProject } from "./project.interface";

export class IPortfolio {
    RecordID?:string;
    PortfolioTitle?:string;
    MainSkill?:string;
    BannerImage?:string;
    CreateTextDescription?:string;
    AboutMeDescription?:string;
    FirstName?:string;
    LastName?:string;
    Overview?:string;
    RoleTitle?:string;
    Address?:string;
    Age?:string;
    Phone?:string;
    Nationality?:string;
    Email?:string;
    Freelance?:string;
    Languages?:string;
    PersonImage?:string;
    Skills?:string;
    MySkillDescription?:string;
    ExperienceDescription?:string;
    ContactDescription?:string;
    CreatedByGuid?:string;
    Project?:IProject[]=[];
}
