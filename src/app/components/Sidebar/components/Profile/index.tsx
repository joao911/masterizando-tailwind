import React from 'react'
import { LogOut } from 'lucide-react'

export const Profile: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/joao911.png"
        alt="Avatar"
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-zinc-700">
          João Paulo Duarte
        </span>
        <span className="max-w-40 truncate text-sm text-zinc-700">
          joaopaulolacerda911@gmail.com
        </span>
      </div>
      <button type="button" className="hove:bg-zinc-50 ml-auto rounded p-2">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
