import dayjs from 'dayjs'

enum TypeEnum {
  FOLDER = 'folder',
  FILE = 'file'
}

class File {
  id: number
  name: string
  size: number
  type: TypeEnum
  createdDate: string
  updatedDate: string

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(rawData: Record<string, any>) {
    this.id = rawData.ino
    this.name = rawData.name
    this.size = rawData.size / 1024 // kb
    this.type = rawData.type
    this.createdDate = dayjs(rawData.birthtime).format('YYYY-MM-DD HH:mm:ss')
    this.updatedDate = dayjs(rawData.mtime).format('YYYY-MM-DD HH:mm:ss')
  }
}

export { File, TypeEnum }
