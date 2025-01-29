'use client'

import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import {motion} from 'framer-motion'

interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

export const TabItem: React.FC<TabItemProps> = ({
  title,
  value,
  isSelected = false
}) => {
  return (
    <Tabs.Trigger value={value} className='relative px-1 pb-4 text-sm font-medium text-zinc-500  hover:text-violet-700 data-[state=active]:text-violet-700'>
      <span> {title}</span>
      {
        isSelected && (
          <motion.span layoutId='activeTab' className='absolute -bottom-px left-0 right-0 h-px bg-violet-700' />
        )
      }

    </Tabs.Trigger>
  )
}
