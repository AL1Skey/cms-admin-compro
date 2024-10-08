'use client'
import { useMediaQuery } from '@/hooks/use-media-query'
import { useMailConfig } from '@/hooks/use-mail'
import { cn } from '@/lib/utils'
import React from 'react'
const MailSidebarWrapper = ({ children }: { children: React.ReactNode }) => {
  const [mailConfig] = useMailConfig()
  const { isOpen } = mailConfig
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

export default MailSidebarWrapper