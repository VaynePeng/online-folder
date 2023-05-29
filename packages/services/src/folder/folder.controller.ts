import { Controller, Get, Post, Req } from '@nestjs/common'
import { Request } from 'express'
import { FolderService } from './folder.service'
import { Folder } from './folder'

@Controller('folder')
export class FolderController {
  folderService: FolderService

  constructor(folderService: FolderService) {
    this.folderService = folderService
  }

  @Get('list')
  getFolderList(): Array<Folder> {
    return this.folderService.getFolderList()
  }

  @Post('create')
  createFolder(@Req() request: Request): string {
    console.log('request', request.body)
    return 'create folder success'
  }
}
