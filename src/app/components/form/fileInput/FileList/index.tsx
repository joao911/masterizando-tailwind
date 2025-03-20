'use client'

import React from 'react'
import { useFileInput } from '../Root'
import { map } from 'lodash'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { FileItem } from '../FileItem'

export const FileList: React.FC = () => {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  return (
    <div className="mt-4 w-full space-x-3" ref={parent}>
      {map(files, (file) => (
        <FileItem
          key={file?.name}
          name={file?.name}
          size={file?.size}
          state="progress"
        />
      ))}
    </div>
  )
}
