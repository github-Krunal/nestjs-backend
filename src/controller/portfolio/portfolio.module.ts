import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SchemaConstant } from 'src/constant/schema.constant';
import { ExperienceSchema } from 'src/schemas/experience.schema';
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
    },
    {
      name:SchemaConstant.EXPERIENCE,
      schema:ExperienceSchema
    }
  ])],
  controllers: [PortfolioController],
  providers:[PortfolioService]
})
export class PortfolioModule {}
