'use client'
import React from 'react'
import { Menu, Search } from 'lucide-react'
import * as Collapsible from '@radix-ui/react-collapsible'

import { Logo } from './components/Logo'
import { Profile } from './components/Profile'
import { InputControl, InputPrefix, InputRoot } from '../Input'
import { Button } from '../Button'
import { MainNavigation } from './components/MainNavigation'
import { UsedSpaceWidget } from './components/UsedSpaceWidget'

export const Sidebar: React.FC = () => {
  return (
    <Collapsible.Root className="data=[state=open]:h-screen pg:px-5 fixed bottom-0 left-0 right-0 top-0 z-20 flex flex-col gap-6 border-r border-zinc-200 bg-white p-4 px-5 py-8 lg:right-auto lg:w-80 lg:border-r lg:py-8 lg:data-[state=closed]:h-screen dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content
        forceMount
        className="lg:data=[state=closed]:flex flex flex-1 flex-col gap-6 data-[state=closed]:hidden"
      >
        <InputRoot>
          <InputPrefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </InputPrefix>
          <InputControl placeholder="Search" />
        </InputRoot>
        <MainNavigation />
        <UsedSpaceWidget />
        <div className="h-px bg-zinc-200 dark:bg-zinc-700" />
        <Profile />
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
