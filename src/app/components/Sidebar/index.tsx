import React from 'react';

import { Logo } from './components/Logo';
import { MainNavigation } from './components/MainNavigation';
import { UsedSpaceWidget } from './components/UsedSpaceWidget';
import { Profile } from './components/Profile';
import { InputControl, InputPrefix, InputRoot } from '../Input';
import { Search } from 'lucide-react';



export const Sidebar: React.FC = () => {
  return (
    <aside className="border-r border-zinc-200 px-5 py-8  flex flex-col gap-6">
      <Logo />
      <InputRoot>
        <InputPrefix>
          <Search className='text-zinc-500 h-5 w-5' />
        </InputPrefix>
        <InputControl placeholder='Search' />
      </InputRoot>
      <MainNavigation />
      <UsedSpaceWidget />
      <div className='h-px bg-zinc-200' />
      <Profile />
    </aside>
  )
}
