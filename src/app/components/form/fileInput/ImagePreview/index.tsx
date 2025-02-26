'use client'


import React, { useMemo } from 'react';
import { User } from "lucide-react";
import { useFileInput } from '../Root';




export const ImagePreview: React.FC = () => {
  const { files } = useFileInput()

  const previewURL = useMemo(()=>{
    if(!files.length) return null
    return URL.createObjectURL(files[0])
  },[files])

  if(!previewURL){
    return (
      <div className="flex justify-center items-center rounded-full h-16 w-16 bg-violet-50">
        <User className="h-8 w-8 text-violet-500" />
      </div>
    )
  }else{
    return(
      <img src={previewURL} alt="" className="w-16 h-16 rounded-full object-cover" />
    )
  }
}
