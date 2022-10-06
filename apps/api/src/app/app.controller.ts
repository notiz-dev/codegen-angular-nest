import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

import { AppService } from './app.service';
import { Message } from './entities/message.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  @ApiResponse({ type: Message })
  getData(): Message {
    return this.appService.getData();
  }
}
