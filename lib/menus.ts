

export type SubChildren = {
  href: string;
  label: string;
  active: boolean;
  children?: SubChildren[];
};
export type Submenu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
  submenus?: Submenu[];
  children?: SubChildren[];
};

export type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
  submenus: Submenu[];
  id: string;
};

export type Group = {
  groupLabel: string;
  menus: Menu[];
  id: string;
};

export function getMenuList(pathname: string, t: any): Group[] {

  return [
    {
      groupLabel: "Pages",
      id: "components",
      menus: [],
    },
    {
      groupLabel: "",
      id: "home",
      menus: [
        {
          id: "home",
          href: "/home",
          label: "Home",
          active: pathname.includes("/home"),
          icon: "heroicons-outline:view-grid-add",
          submenus: [
            {
              href: "/home/banner",
              label: "Banner",
              active: pathname === "/home/banner",
              icon: "",
              children: [],
            },
            {
              href: "/home/about-us",
              label: "About Us",
              active: pathname === "/home/about-us",
              icon: "",
              children: [],
            },
            {
              href: "/home/footer",
              label: "Contact Info",
              active: pathname === "/home/footer",
              icon: "",
              children: [],
            },
          ],
        },
      ],
    },
    {
      groupLabel: "",
      id: "staff",
      menus: [
        {
          id: "staff",
          href: "/staff",
          label: "Staff",
          active: pathname.includes("/staff"),
          icon: "heroicons-outline:view-grid-add",
          submenus: [
            {
              href: "/staff/alumni-request",
              label: "Alumni Request",
              active: pathname === "/staff/alumni-request",
              icon: "",
              children: [],
            },
            {
              href: "/staff/alumni",
              label: "Alumni",
              active: pathname === "/staff/alumni",
              icon: "",
              children: [],
            },
            {
              href: "/staff/dewan",
              label: "Dewan Pembina",
              active: pathname === "/staff/dewan",
              icon: "",
              children: [],
            },
            {
              href: "/staff/pengurus",
              label: "Tim Kepengurusan",
              active: pathname === "/staff/pengurus",
              icon: "",
              children: [],
            },
          ],
        },
      ],
    },
    {
      groupLabel: "",
      id: "Other",
      menus: [
        {
          id: "other",
          href: "/other",
          label: "Page Lain",
          active: pathname.includes("/other"),
          icon: "heroicons-outline:view-grid-add",
          submenus: [
            {
              href: "/other/blog",
              label: "Blog",
              active: pathname === "/other/blog",
              icon: "",
              children: [],
            },
            {
              href: "/other/karir",
              label: "Karir",
              active: pathname === "/other/karir",
              icon: "",
              children: [],
            },
            // {
            //   href: "/other/contact",
            //   label: "Contact Info",
            //   active: pathname === "/other/contact",
            //   icon: "",
            //   children: [],
            // },
          ],
        },
      ],
    },
    
  ];
}
export function getHorizontalMenuList(pathname: string, t: any): Group[] {
  return [
    {
      groupLabel: t("elements"),
      id: "components",
      menus: [
        {
          id: "components",
          href: "/components/avatar",
          label: t("components"),
          active: pathname.includes("/components"),
          icon: "heroicons-outline:collection",
          submenus: [
            {
              href: "/components/avatar",
              label: t("avatar"),
              active: pathname === "/components/avatar",
              icon: "",
              children: [],
            },
            {
              href: "/components/alert",
              label: t("alert"),
              active: pathname === "/components/alert",
              icon: "",
              children: [],
            },
            {
              href: "/components/alert-dialog",
              label: t("alertDialog"),
              active: pathname === "/components/alert-dialog",
              icon: "",
              children: [],
            },
            {
              href: "/components/accordion",
              label: t("accordion"),
              active: pathname === "/components/accordion",
              icon: "",
              children: [],
            },
            {
              href: "/components/badge",
              label: t("badge"),
              active: pathname === "/components/badge",
              icon: "",
              children: [],
            },
            {
              href: "/components/breadcrumb",
              label: t("breadcrumb"),
              active: pathname === "/components/breadcrumb",
              icon: "",
              children: [],
            },
            {
              href: "/components/button",
              label: t("button"),
              active: pathname === "/components/button",
              icon: "",
              children: [],
            },
            {
              href: "/components/calendar",
              label: t("calendar"),
              active: pathname === "/components/calendar",
              icon: "",
              children: [],
            },
            {
              href: "/components/card",
              label: t("card"),
              active: pathname === "/components/card",
              icon: "",
              children: [],
            },
            {
              href: "/components/carousel",
              label: t("carousel"),
              active: pathname === "/components/carousel",
              icon: "",
              children: [],
            },
            {
              href: "/components/collapsible",
              label: t("collapsible"),
              active: pathname === "/components/collapsible",
              icon: "",
              children: [],
            },
            {
              href: "/components/context-menu",
              label: t("contextMenu"),
              active: pathname === "/components/context-menu",
              icon: "",
              children: [],
            },
            {
              href: "/components/dialog",
              label: t("dialog"),
              active: pathname === "/components/dialog",
              icon: "",
              children: [],
            },
            {
              href: "/components/drawer",
              label: t("drawer"),
              active: pathname === "/components/drawer",
              icon: "",
              children: [],
            },
            {
              href: "/components/dropdown",
              label: t("dropdown"),
              active: pathname === "/components/dropdown",
              icon: "",
              children: [],
            },
            {
              href: "/components/hover-card",
              label: t("hoverCard"),
              active: pathname === "/components/hover-card",
              icon: "",
              children: [],
            },
            {
              href: "/components/menu-bar",
              label: t("menuBar"),
              active: pathname === "/components/menu-bar",
              icon: "",
              children: [],
            },
            {
              href: "/components/navigation-menu",
              label: t("navigationMenu"),
              active: pathname === "/components/navigation-menu",
              icon: "",
              children: [],
            },
            {
              href: "/components/pagination",
              label: t("pagination"),
              active: pathname === "/components/pagination",
              icon: "",
              children: [],
            },
            {
              href: "/components/popover",
              label: t("popover"),
              active: pathname === "/components/popover",
              icon: "",
              children: [],
            },
            {
              href: "/components/progress",
              label: t("progress"),
              active: pathname === "/components/progress",
              icon: "",
              children: [],
            },
            {
              href: "/components/resizable",
              label: t("resizable"),
              active: pathname === "/components/resizable",
              icon: "",
              children: [],
            },
            {
              href: "/components/scroll-area",
              label: t("scrollArea"),
              active: pathname === "/components/scroll-area",
              icon: "",
              children: [],
            },
            {
              href: "/components/separator",
              label: t("separator"),
              active: pathname === "/components/separator",
              icon: "",
              children: [],
            },
            {
              href: "/components/sheet",
              label: t("sheet"),
              active: pathname === "/components/sheet",
              icon: "",
              children: [],
            },
            {
              href: "/components/skeleton",
              label: t("skeleton"),
              active: pathname === "/components/skeleton",
              icon: "",
              children: [],
            },
            {
              href: "/components/sonner",
              label: t("sonner"),
              active: pathname === "/components/sonner",
              icon: "",
              children: [],
            },
            {
              href: "/components/tabs",
              label: t("tabs"),
              active: pathname === "/components/tabs",
              icon: "",
              children: [],
            },
            {
              href: "/components/toast",
              label: t("toast"),
              active: pathname === "/components/toast",
              icon: "",
              children: [],
            },
            {
              href: "/components/toggle",
              label: t("toggle"),
              active: pathname === "/components/toggle",
              icon: "",
              children: [],
            },
            {
              href: "/components/tooltip",
              label: t("tooltip"),
              active: pathname === "/components/tooltip",
              icon: "",
              children: [],
            },
            {
              href: "/components/typography",
              label: t("typography"),
              active: pathname === "/components/typography",
              icon: "",
              children: [],
            },
            {
              href: "/components/colors",
              label: t("colors"),
              active: pathname === "/components/colors",
              icon: "",
              children: [],
            },
          ],
        },
      ],
    },
    {
      groupLabel: "",
      id: "maps",
      menus: [
        {
          id: "maps",
          href: "/maps/maps-leaflet",
          label: t("maps"),
          active: pathname.includes("/maps/maps-leaflet"),
          icon: "heroicons-outline:map",
          submenus: [
            {
              href: "/maps/maps-leaflet",
              label: t("mapsLeaflet"),
              active: pathname.includes("/maps/maps-leaflet"),
              icon: "",
              children: [],
            },
            {
              href: "/maps/maps-vector",
              label: t("mapsVector"),
              active: pathname.includes("/maps/maps-vector"),
              icon: "",
              children: [],
            },
          ],
        },
      ],
    },
    {
      groupLabel: "",
      id: "icons",
      menus: [],
    },
  ];
}


