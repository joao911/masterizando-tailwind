import React from 'react'
import { LogOut } from 'lucide-react'
import { Button } from '@/app/components/Button'

export const Profile: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/joao911.png"
        alt="Avatar"
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          João Paulo Duarte
        </span>
        <span className="max-w-40 truncate text-sm text-zinc-700 dark:text-zinc-400">
          joaopaulolacerda911@gmail.com
        </span>
      </div>
      <Button variant="ghost" type="button">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
