'use client'

import React, { useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'

import { TabItem } from '../TabItem'
import { map } from 'lodash'

export const SettingsTabs: React.FC = () => {
  const [currentValue, setCurrentValue] = useState('0')
  const value = [
    'My Details',
    'Profile',
    'Password',
    'Team',
    'Plan',
    'Billing',
    'Email',
    'Notifications',
    'Integrations',
    'Api',
  ]
  return (
    <Tabs.Root value={currentValue} onValueChange={setCurrentValue}>
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
            {map(value, (item, index) => (
              <TabItem
                key={index}
                value={String(index)}
                title={item}
                isSelected={currentValue === String(index)}
              />
            ))}
          </Tabs.List>
          <ScrollArea.Scrollbar
            className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
            orientation="horizontal"
          >
            <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
          </ScrollArea.Scrollbar>
        </ScrollArea.Viewport>
      </ScrollArea.Root>
    </Tabs.Root>
  )
}
