import React, { ComponentProps } from 'react'

export const TextArea: React.FC<ComponentProps<'textarea'>> = ({
  ...props
}) => {
  return (
    <textarea
      className="min-h-[120px] w-full resize-none rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
      {...props}
    />
  )
}
