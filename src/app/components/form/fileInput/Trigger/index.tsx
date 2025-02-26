'use client'

import React from 'react';
import { UploadCloud } from "lucide-react";
import { useFileInput } from '../Root';


export const Trigger: React.FC = () => {
  const {id}= useFileInput()
  return (
    <label htmlFor={id} className="group w-full flex-1 cursor-pointer flex-col items-center justify-center pag-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-violet-200 hover:bg-violet-25 hover:text-violet-500">
     

      <div className="flex justify-center items-center ">
        <div className="rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100 flex items-center justify-center h-15 -w-15">
          <UploadCloud className="h-5 -w-5 text-zinc-600 group-hover:text-violet-600" />
        </div>

      </div>
      <div className="flex flex-col items-center">
        <span className="text-xs">
          <span className="font-semibold text-violet-700 ">Click to upload</span>
          or drag and drop
        </span>
        <span className="text-xs">SVG, PNG, JPG or GIF (max. 800x400)</span>
      </div>

    </label>
  )
}
