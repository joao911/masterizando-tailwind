'use client'
import React, { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from '../Root'

interface ControlProps extends ComponentProps<'input'> {}

export const Control: React.FC<ControlProps> = ({
  multiple = false,
  ...props
}) => {
  const { id, onFilesSelected } = useFileInput()

  function handleFileSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return
    }
    const files = Array.from(event.target.files)
    onFilesSelected(files, multiple)
  }

  return (
    <input
      type="file"
      id={id}
      className="sr-only"
      {...props}
      onChange={handleFileSelected}
      multiple={multiple}
    />
  )
}
