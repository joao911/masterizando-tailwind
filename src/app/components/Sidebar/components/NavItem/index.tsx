import { ChevronDown } from 'lucide-react';
import React, { ElementType } from 'react';

interface NavItemProps {
  title: string
  icon: ElementType
}

export const NavItem: React.FC<NavItemProps> = ({
  title,
  icon: Icon
}) => {
  return (
    <a href="" className='flex items-center rounded gap-3 px-3 py-2 hover:bg-violet-50 group'>
      <Icon className='text-zinc-500 h-5 w-5' />
      <span className='font-medium text-zinc-700 group-hover:text-violet-500'>{title}</span>
      <ChevronDown className='text-zinc-500 h-5 w-5 ml-auto group-hover:text-violet-300' />
    </a>
  )
}
