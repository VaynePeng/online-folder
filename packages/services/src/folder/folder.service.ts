import { Injectable } from '@nestjs/common'
import { Folder } from './folder'
import { getFiles } from '../common/file'

@Injectable()
export class FolderService {
  getFolderList(): Array<Folder> {
    return getFiles('./')
  }

  createFolder(): string {
    return 'create folder success'
  }
}
