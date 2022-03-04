import { Controller, Get } from '@nestjs/common';
import { AppConfigService } from './app-config/app-config.service';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: AppConfigService,
  ) {}

  @Get()
  getHello(): string {
    console.log(this.configService.get('PORT'));
    return this.appService.getHello();
  }
}
