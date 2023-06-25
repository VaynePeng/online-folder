import { Injectable } from '@nestjs/common'
import { File } from '@/model/file'
import { getFiles } from '@/common/fh'

@Injectable()
export class FileService {
  getFileList(): Array<File> {
    return getFiles('./')
  }

  createFile(): string {
    return 'create File success'
  }
}
