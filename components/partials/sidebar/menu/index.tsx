"use client";

import React from 'react'


import { useConfig } from "@/hooks/use-config";
import { MenuClassic } from './menu-classic';
import { MenuTwoColumn } from './menu-two-column';
import { MenuDragAble } from './menu-dragable';
import { useMediaQuery } from '@/hooks/use-media-query';

export function Menu() {

    const [config, setConfig] = useConfig()
    const isDesktop = useMediaQuery('(min-width: 1280px)')

    if (config.sidebar === 'draggable') {
        return <MenuDragAble />
    }

    if (config.sidebar === 'two-column') {
        return <MenuTwoColumn />
    }



    return (
        <MenuClassic />
    );
}
