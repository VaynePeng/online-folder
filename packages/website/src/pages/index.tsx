import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import axios from 'axios'
import type { File } from '@icelf/model/file'

const Home = () => {
  const [fileList, setFileList] = useState<Array<File>>([])

  const getFileList = () => {
    axios.get('http://localhost:3000/api/file/list').then((res) => {
      const list = res.data as Array<File>
      setFileList(list)
    })
  }

  useEffect(() => {
    getFileList()
  }, [])

  return (
    <main className="p-4">
      {fileList.map((file) => (
        <li key={file.id} className="list-none">
          <Image src="" alt="icon" />
          {file.name}
        </li>
      ))}
    </main>
  )
}

export default Home
