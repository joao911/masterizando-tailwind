'use client'

import React from 'react'
import * as Select from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'

interface SelectItemProps extends Select.SelectProps {
  children: React.ReactNode
  placeholder: string
}
export const SelectComponent: React.FC<SelectItemProps> = ({
  children,
  placeholder,
  ...props
}) => {
  return (
    <Select.Root name="country" {...props}>
      <Select.Trigger
        style={{ outline: 'none' }}
        className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus:border-violet-300 focus:ring-4 focus:ring-violet-100 data-[placeholder]:text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20 dark:data-[placeholder]:text-zinc-400"
      >
        <Select.Value placeholder={placeholder} className="text-black" />
        <Select.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          className="z-10 overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-800"
          side="bottom"
          position="popper"
          sideOffset={8}
        >
          <Select.Viewport>{children}</Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
