"use client";

import React from 'react'
import { Ellipsis, LogOut } from "lucide-react";
import { usePathname } from "@/components/navigation";


import { cn } from "@/lib/utils";
import { getMenuList, type Group, type Menu, type Submenu } from "@/lib/menus";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
    TooltipProvider
} from "@/components/ui/tooltip";
import { useConfig } from "@/hooks/use-config";
import MenuLabel from "../common/menu-label";

import MenuItem from "../common/menu-item";
import { CollapseMenuButton } from "../common/collapse-menu-button";
import MenuWidget from "../common/menu-widget";
import SearchBar from '@/components/partials/sidebar/common/search-bar'
import TeamSwitcher from '../common/team-switcher'
import IconNav from './icon-nav';
import SidebarNav from './sideabr-nav';
import { useTranslations } from 'next-intl';


export function MenuTwoColumn() {
    // translate
    const t = useTranslations("Menu")
    const pathname = usePathname();
    const menuList = getMenuList(pathname, t);

    return (
        <>
            <IconNav menuList={menuList} />
            <SidebarNav menuList={menuList} />
        </>


    );
}
