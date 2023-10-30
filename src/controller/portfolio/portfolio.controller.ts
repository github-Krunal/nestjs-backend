import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { RoutesConstant } from 'src/constant/routes.contact';
import { IExperiece } from 'src/interface/experience.interface';
import { Experience } from 'src/schemas/experience.schema';
import { Portfolio } from 'src/schemas/portfolio.schema';
import { Project } from 'src/schemas/project.schema';
import { PortfolioService } from 'src/services/portfolio.service';

@Controller()

export class PortfolioController {
    constructor(private portfolioService: PortfolioService) { }
    @Post(RoutesConstant.PORTFOLIOSAVE)
    portfolioSave(@Body() responseData: Portfolio) {
        return this.portfolioService.createPortfolio(responseData)
    }
    @Get(RoutesConstant.PORTFOLIOGET)
    getPortfolio(@Query('currentUserID') currentUserID: string){
        return this.portfolioService.getPortfolio(currentUserID);
    }
    @Post(RoutesConstant.PORTFOLIOUPDATE)
    portfolioUpdate(@Body() responseData: Portfolio) {
        return this.portfolioService.updatePortfolio(responseData)
    }
    @Post(RoutesConstant.PROJECTSAVE)
    projectSave(@Body() responseData: Project[]) {
        return this.portfolioService.createProject(responseData)
    }
    @Get(RoutesConstant.PROJECTGET)
    getProject(@Query('currentUserID') currentUserID: string){
        return this.portfolioService.getProject(currentUserID);
    }
    @Get(RoutesConstant.EXPERIENCEGET)
    getExperience(@Query('currentUserID') currentUserID: string){
        return this.portfolioService.getExperience(currentUserID);
    }
    @Post(RoutesConstant.EXPERIENCESAVE)
    experienceSave(@Body() responseData: Experience[]) {
        return this.portfolioService.createExperience(responseData)
    }
    @Post(RoutesConstant.EXPERIENCEUPDATE)
    experienceUpdate(@Body() responseData: IExperiece) {
        return this.portfolioService.updateExperience(responseData)
    }
}
