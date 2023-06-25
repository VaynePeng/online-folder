import * as fs from 'fs'
import * as path from 'path'
import { File, TypeEnum } from '@/model/file'

const getFiles = (dir: string): Array<File> => {
  const files = fs.readdirSync(dir)
  const fileList: Array<File> = []
  files.forEach((element) => {
    const filePath = path.join(dir, element)
    const fileName = path.basename(filePath)
    const stat = fs.statSync(filePath)
    const file = new File({
      ...stat,
      name: fileName,
      type: stat.isDirectory() ? TypeEnum.FOLDER : TypeEnum.FILE
    })
    console.log('info>>>', fileName, stat)
    fileList.push(file)
  })
  return fileList
}

export { getFiles }
