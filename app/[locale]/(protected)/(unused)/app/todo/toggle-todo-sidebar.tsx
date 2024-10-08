'use client'
import { Button } from '@/components/ui/button'
import { useMediaQuery } from '@/hooks/use-media-query'
import { useTodoConfig } from '@/hooks/use-todo'
import { Menu } from 'lucide-react'
import React from 'react'

const ToggleTodoSidebar = () => {
    const isTablet = useMediaQuery("(min-width: 1024px)");
    const [todoConfig, setTodoConfig] = useTodoConfig()
    if (isTablet) return null


    return (
        <Button size='icon' color='secondary' onClick={() => setTodoConfig({ ...todoConfig, isOpen: !todoConfig.isOpen })}>
            <Menu className=' h-5 w-5' />
        </Button>
    )
}

export default ToggleTodoSidebar