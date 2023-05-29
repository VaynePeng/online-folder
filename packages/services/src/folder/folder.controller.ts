import { Controller, Get, Post, Req } from '@nestjs/common'
import { Request } from 'express'

@Controller('folder')
export class FolderController {
  @Get('list')
  getFolderList(@Req() request: Request): string {
    console.log('request', request.query)
    return 'get folder list'
  }

  @Post('create')
  createFolder(@Req() request: Request): string {
    console.log('request', request.body)
    return 'create folder success'
  }
}
