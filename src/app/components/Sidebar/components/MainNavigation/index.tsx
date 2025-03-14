import React from 'react';
import {  Home, BarChart, SquareStack, CheckSquare, Flag, Users } from 'lucide-react';
import { NavItem } from '../NavItem';

// import { Container } from './styles';

export const MainNavigation: React.FC = () => {
  return <nav className='space-y-0.5'>
    <NavItem title='Home' icon={Home} />
    <NavItem title='Dashboard' icon={BarChart} />
    <NavItem title='Projects' icon={SquareStack} />
    <NavItem title='Tasks' icon={CheckSquare} />
    <NavItem title='Reporting' icon={Flag} />
    <NavItem title='Users' icon={Users} />
  </nav>
}
