import * as fs from 'fs'
import * as path from 'path'
import { Folder, TypeEnum } from '../folder/folder'

const getFiles = (dir: string): Array<Folder> => {
  const files = fs.readdirSync(dir)
  const fileList: Array<Folder> = []
  files.forEach((element) => {
    const filePath = path.join(dir, element)
    const fileName = path.basename(filePath)
    const stat = fs.statSync(filePath)
    const file = new Folder({
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
