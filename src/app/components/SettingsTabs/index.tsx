'use client'

import React, { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { TabItem } from '../TabItem';
import { map } from 'lodash';


export const SettingsTabs: React.FC = () => {
  const [currentValue, setCurrentValue] = useState('0')
  const value = ['My Details', 'Profile', 'Password', 'Team', 'Plan', 'Billing', 'Email', 'Notifications', 'Integrations', 'Api']
  return (

    <Tabs.Root value={currentValue} onValueChange={setCurrentValue}>
      <Tabs.List className='mt-6 flex w-full items-center gap-4 border-b border-zinc-200'>
        {map(value, (item, index) => (
          <TabItem key={index} value={String(index)} title={item} isSelected={currentValue === String(index)} />
        ))}
      </Tabs.List>
    </Tabs.Root>
  )
}
