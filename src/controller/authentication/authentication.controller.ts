import { Controller, Get } from '@nestjs/common';
import { RoutesConstant } from 'src/constant/routes.contact';

@Controller()
export class AuthenticationController {
   @Get(RoutesConstant.LOGIN)
   getlogin(){
    return 'login'
   }
}
