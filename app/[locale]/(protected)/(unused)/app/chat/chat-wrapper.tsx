'use client'
import { useMediaQuery } from '@/hooks/use-media-query';
import React from 'react'
import { useChatConfig } from '@/hooks/use-chat';

const ChatWrapper = ({ children }: { children: React.ReactNode }) => {
    const [chatConfig, setChatConfig] = useChatConfig();
    const { isOpen } = chatConfig
    const isTablet = useMediaQuery("(min-width: 1024px)");
    return (
        <div className=' app-height flex gap-5 relative'>
            {!isTablet && isOpen && (
                <div
                    onClick={() => setChatConfig({ ...chatConfig, isOpen: false })}
                    className="overlay bg-default-900 dark:bg-default-900 dark:bg-opacity-60 bg-opacity-60 backdrop-filter
         backdrop-blur-sm absolute w-full flex-1 inset-0 z-20 rounded-md"

                ></div>
            )}

            {children}
        </div>
    )
}

export default ChatWrapper