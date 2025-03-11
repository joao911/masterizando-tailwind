'use client'

import React from 'react'
import * as Select from '@radix-ui/react-select'
import { Check, ChevronDown } from 'lucide-react'

export const SelectComponent: React.FC = () => {
  return (
    <Select.Root name="country">
      <Select.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600">
        <Select.Value placeholder="Select a country" className="text-black" />
        <Select.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          className="z-10 overflow-hidden rounded-lg border border-zinc-200 bg-white"
          side="bottom"
          position="popper"
          sideOffset={8}
        >
          <Select.Viewport>
            <Select.Item
              value="1"
              className="flex w-[--radix-select-trigger-width] items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
            >
              <Select.ItemText>Item 1</Select.ItemText>
              <Select.ItemIndicator>
                <Check className="h-4 w-4 text-violet-500" />
              </Select.ItemIndicator>
            </Select.Item>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
