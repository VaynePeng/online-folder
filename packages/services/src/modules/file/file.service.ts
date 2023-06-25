import { Injectable } from '@nestjs/common'
import { File } from '@/model/file'
import { getFiles } from '@/common/fh'
import Result, { Res } from '@/common/result'

@Injectable()
export class FileService {
  getFileList(): Res<Array<File>> {
    return new Result({
      code: 200,
      data: getFiles('./'),
      message: 'success'
    })
  }

  createFile(): string {
    return 'create File success'
  }
}
