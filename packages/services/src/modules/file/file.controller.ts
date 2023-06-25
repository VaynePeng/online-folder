import { Controller, Get, Post, Req } from '@nestjs/common'
import { File } from '@/model/file'
import { Request } from 'express'
import { FileService } from './file.service'

@Controller('file')
export class FileController {
  fileService: FileService

  constructor(fileService: FileService) {
    this.fileService = fileService
  }

  @Get('list')
  getFileList(): Array<File> {
    return this.fileService.getFileList()
  }

  @Post('create')
  createFile(@Req() request: Request): string {
    console.log('request', request.body)
    return 'create file success'
  }
}
