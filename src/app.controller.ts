import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { RoutesConstant } from './constant/routes.contact';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get(RoutesConstant.TEST)
  getHello(): string {
    return this.appService.getHello();
  }
}
