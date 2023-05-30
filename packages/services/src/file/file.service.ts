import { Injectable } from '@nestjs/common'
import { File } from '@icelf/model/file'
import { getFiles } from '../common/file'

@Injectable()
export class FileService {
  getFileList(): Array<File> {
    return getFiles('./')
  }

  createFile(): string {
    return 'create File success'
  }
}
