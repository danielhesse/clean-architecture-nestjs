import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

type GetHelloResponse = {
  message: string;
};

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): GetHelloResponse {
    return this.appService.getHello();
  }

  @Get('/now')
  getCurrentDate(): Date {
    return this.appService.getCurrentDate();
  }
}
