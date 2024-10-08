'use client'

import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import { useChatConfig } from '@/hooks/use-chat';
import { ScrollArea } from '@/components/ui/scroll-area';

const InfoWrapper = ({ children }: { children: React.ReactNode }) => {
    const [chatConfig] = useChatConfig();
    if (!chatConfig.showInfo) return null
    return (
        <Card className='w-[285px]'>
            <ScrollArea className='h-full'>
                <CardContent className='p-0'> {children}</CardContent>
            </ScrollArea>
        </Card>
    )
}

export default InfoWrapper