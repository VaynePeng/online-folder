import { Controller, Get, Req } from '@nestjs/common'
import { Request } from 'express'

@Controller('folder')
export class FolderController {
  @Get('list')
  getFolderList(@Req() request: Request): string {
    console.log('request', request.query)
    return 'folder list'
  }
}
