import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SchemaConstant } from 'src/constant/schema.constant';
import { ContactSchema } from 'src/schemas/contact.schema';
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
    },
    {
      name:SchemaConstant.CONTACT,
      schema:ContactSchema
    }
  ])],
  controllers: [PortfolioController],
  providers:[PortfolioService]
})
export class PortfolioModule {}
