import React, { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm',
    'focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2',
    'active:opacity-80', // Corrigido aqui
  ],
  variants: {
    variant: {
      primary:
        'bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-700 dark:hover:bg-violet-600',
      outline:
        'border border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-50 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-800',
      ghost:
        'border border-zinc-300 text-zinc-700 hover:bg-zinc-50 dark:hover:bg-white/5 dark:text-zinc-400',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export const Button = ({ variant, className, ...props }: ButtonProps) => {
  return <button {...props} className={button({ variant, className })} />
}
