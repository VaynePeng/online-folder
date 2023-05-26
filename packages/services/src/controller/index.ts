import { Controller, Get } from '@nestjs/common'
import { AppService } from '../service'

export * from './folder'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }
}
