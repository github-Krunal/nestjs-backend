import { Body, Controller, Get, Post } from '@nestjs/common';
import { RoutesConstant } from 'src/constant/routes.contact';
import { Portfolio } from 'src/schemas/portfolio.schema';
import { PortfolioService } from 'src/services/portfolio.service';

@Controller()

export class PortfolioController {
    constructor(private portfolioService: PortfolioService) { }

    @Post(RoutesConstant.PORTFOLIOSAVE)
    portfolioSave(@Body() responseData: Portfolio) {
        return this.portfolioService.createPortfolio(responseData)
    }
    @Get(RoutesConstant.PORTFOLIOGET)
    getPortfolio(){
        return this.portfolioService.getPortfolio();
    }
}
