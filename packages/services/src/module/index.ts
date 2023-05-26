import { Module } from '@nestjs/common'
import * as Controller from '../controller'
import { AppService } from '../service'

@Module({
  imports: [],
  controllers: [Controller.AppController, Controller.FolderController],
  providers: [AppService]
})
export class AppModule {}
