'use client'
import { useMediaQuery } from '@/hooks/use-media-query'
import { cn } from '@/lib/utils'
import React from 'react'
import { useChatConfig } from '@/hooks/use-chat'
const ChatSidebarWrapper = ({ children }: { children: React.ReactNode }) => {
    const [chatConfig] = useChatConfig()
    const { isOpen } = chatConfig
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
        <div className='relative w-[320px] h-full '>{children}</div>
    )
}

export default ChatSidebarWrapper