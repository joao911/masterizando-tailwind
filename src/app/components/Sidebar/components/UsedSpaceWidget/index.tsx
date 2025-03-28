import { LifeBuoy, Cog } from 'lucide-react'
import React from 'react'
import { NavItem } from '../NavItem'

// import { Container } from './styles';

export const UsedSpaceWidget: React.FC = () => {
  return (
    <div className="mt-auto flex flex-col gap-6 dark:bg-zinc-800">
      <nav className="space-y-0.5">
        <NavItem title="Support" icon={LifeBuoy} />
        <NavItem title="Settings" icon={Cog} />
      </nav>
      <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5">
        <div className="space-y-1">
          <span className="text-sm/5 font-medium text-violet-500 dark:text-zinc-400">
            Used space
          </span>
          <p className="text-sm/5 font-medium text-violet-500 dark:bg-zinc-400">
            Your team has used 80% of your available space. Need more?
          </p>
        </div>
        <div className="h-2 rounded-full bg-violet-100 dark:bg-zinc-600">
          <div className="h-2 w-4/5 rounded-full bg-violet-600 dark:bg-violet-400" />
        </div>
        <div className="space-x-3">
          <button
            type="button"
            className="dark:tex-violet-300 text-sm font-medium text-violet-500 hover:text-violet-600 dark:bg-zinc-300 dark:hover:text-violet-100"
          >
            Dismiss
          </button>
          <button
            type="button"
            className="text-sm font-medium text-violet-700 hover:text-violet-900 dark:text-zinc-300 dark:hover:text-zinc-100"
          >
            Upgrade plan
          </button>
        </div>
      </div>
    </div>
  )
}
