import { Module } from '@nestjs/common'
import { FolderModule } from './folder/folder.module'

@Module({
  imports: [FolderModule],
  controllers: [],
  providers: []
})
export class AppModule {}
