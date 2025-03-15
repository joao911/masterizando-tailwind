import React from 'react'
import * as Select from '@radix-ui/react-select'
import { Check } from 'lucide-react'

interface SelectItemProps extends Select.SelectItemProps {
  text: string
}

export const SelectItem: React.FC<SelectItemProps> = ({ text, ...props }) => {
  return (
    <Select.Item
      {...props}
      className="flex w-[--radix-select-trigger-width] items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
    >
      <Select.ItemText>{text}</Select.ItemText>
      <Select.ItemIndicator>
        <Check className="h-4 w-4 text-violet-500" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
