'use client'
import { useMediaQuery } from '@/hooks/use-media-query'
import { useTodoConfig } from '@/hooks/use-todo'
import { cn } from '@/lib/utils'
import React from 'react'
const TodoSidebarWrapper = ({ children }: { children: React.ReactNode }) => {
  const [todoConfig] = useTodoConfig()
  const { isOpen } = todoConfig
  const isTablet = useMediaQuery("(min-width: 1024px)");
  if (!isTablet) {
    return (
      <div className={cn('absolute h-full  start-0  w-[240px] z-50 ', {
        '-start-full': !isOpen
      })}>
        {children}
      </div>
    )
  }
  return (
    <div className='flex-none  md:w-[270px] w-[200px]  '>{children}</div>
  )
}

export default TodoSidebarWrapper