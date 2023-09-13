import { Controller, Get  , Post , UseGuards} from '@nestjs/common';
import {AuthGuard}  from '@nestjs/passport';

@Controller()
export class AppController {
  constructor() {}
 
   @Get()
   get(): string{
    return "hii";
   }

  

@Post('/login')
@UseGuards(AuthGuard("local"))
    login():string{
        // Authentacation complete 
   return 'login route';
  }
  

}