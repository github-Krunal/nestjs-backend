import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SchemaConstant } from 'src/constant/schema.constant';
import { portfolioSchema } from 'src/schemas/portfolio.schema';
import { projectSchema } from 'src/schemas/project.schema';
import { PortfolioService } from 'src/services/portfolio.service';
import { PortfolioController } from './portfolio.controller';

@Module({
  imports:[MongooseModule.forFeature([
    {
      name:SchemaConstant.PORTFOLIO,
      schema:portfolioSchema
    },
    {
      name:SchemaConstant.PROJECT,
      schema:projectSchema
    }
  ])],
  controllers: [PortfolioController],
  providers:[PortfolioService]
})
export class PortfolioModule {}
