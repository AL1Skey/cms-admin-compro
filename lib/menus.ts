

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

export function getMenuList(pathname: string): Group[] {

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
      id: "about-us",
      menus: [
        {
          id: "about-us",
          href: "/about-us",
          label: "About Us",
          active: pathname.includes("/about-us"),
          icon: "heroicons-outline:view-grid-add",
          submenus: [
            {
              href: "/about-us/alumni",
              label: "Alumni (About Us)",
              active: pathname === "/about-us/alumni",
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
    {
      groupLabel: "",
      id: "Table",
      menus: [
        {
          id: "Table",
          href: "/table",
          label: "Table Lainnya",
          active: pathname.includes("/table"),
          icon: "heroicons-outline:view-grid-add",
          submenus: [
            {
              href: "/table/jurusan",
              label: "Jurusan",
              active: pathname === "/table/jurusan",
              icon: "",
              children: [],
            },
            // {
            //   href: "/other/karir",
            //   label: "Karir",
            //   active: pathname === "/other/karir",
            //   icon: "",
            //   children: [],
            // },
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
export function getHorizontalMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "elements",
      id: "components",
      menus: [
        {
          id: "components",
          href: "/components/avatar",
          label: "components",
          active: pathname.includes("/components"),
          icon: "heroicons-outline:collection",
          submenus: [
            {
              href: "/components/avatar",
              label: "avatar",
              active: pathname === "/components/avatar",
              icon: "",
              children: [],
            },
            {
              href: "/components/alert",
              label: "alert",
              active: pathname === "/components/alert",
              icon: "",
              children: [],
            },
            {
              href: "/components/alert-dialog",
              label: "alertDialog",
              active: pathname === "/components/alert-dialog",
              icon: "",
              children: [],
            },
            {
              href: "/components/accordion",
              label: "accordion",
              active: pathname === "/components/accordion",
              icon: "",
              children: [],
            },
            {
              href: "/components/badge",
              label: "badge",
              active: pathname === "/components/badge",
              icon: "",
              children: [],
            },
            {
              href: "/components/breadcrumb",
              label: "breadcrumb",
              active: pathname === "/components/breadcrumb",
              icon: "",
              children: [],
            },
            {
              href: "/components/button",
              label: "button",
              active: pathname === "/components/button",
              icon: "",
              children: [],
            },
            {
              href: "/components/calendar",
              label: "calendar",
              active: pathname === "/components/calendar",
              icon: "",
              children: [],
            },
            {
              href: "/components/card",
              label: "card",
              active: pathname === "/components/card",
              icon: "",
              children: [],
            },
            {
              href: "/components/carousel",
              label: "carousel",
              active: pathname === "/components/carousel",
              icon: "",
              children: [],
            },
            {
              href: "/components/collapsible",
              label: "collapsible",
              active: pathname === "/components/collapsible",
              icon: "",
              children: [],
            },
            {
              href: "/components/context-menu",
              label: "contextMenu",
              active: pathname === "/components/context-menu",
              icon: "",
              children: [],
            },
            {
              href: "/components/dialog",
              label: "dialog",
              active: pathname === "/components/dialog",
              icon: "",
              children: [],
            },
            {
              href: "/components/drawer",
              label: "drawer",
              active: pathname === "/components/drawer",
              icon: "",
              children: [],
            },
            {
              href: "/components/dropdown",
              label: "dropdown",
              active: pathname === "/components/dropdown",
              icon: "",
              children: [],
            },
            {
              href: "/components/hover-card",
              label: "hoverCard",
              active: pathname === "/components/hover-card",
              icon: "",
              children: [],
            },
            {
              href: "/components/menu-bar",
              label: "menuBar",
              active: pathname === "/components/menu-bar",
              icon: "",
              children: [],
            },
            {
              href: "/components/navigation-menu",
              label: "navigationMenu",
              active: pathname === "/components/navigation-menu",
              icon: "",
              children: [],
            },
            {
              href: "/components/pagination",
              label:"pagination",
              active: pathname === "/components/pagination",
              icon: "",
              children: [],
            },
            {
              href: "/components/popover",
              label: "popover",
              active: pathname === "/components/popover",
              icon: "",
              children: [],
            },
            {
              href: "/components/progress",
              label: "progress",
              active: pathname === "/components/progress",
              icon: "",
              children: [],
            },
            {
              href: "/components/resizable",
              label: "resizable",
              active: pathname === "/components/resizable",
              icon: "",
              children: [],
            },
            {
              href: "/components/scroll-area",
              label: "scrollArea",
              active: pathname === "/components/scroll-area",
              icon: "",
              children: [],
            },
            {
              href: "/components/separator",
              label: "separator",
              active: pathname === "/components/separator",
              icon: "",
              children: [],
            },
            {
              href: "/components/sheet",
              label: "sheet",
              active: pathname === "/components/sheet",
              icon: "",
              children: [],
            },
            {
              href: "/components/skeleton",
              label: "skeleton",
              active: pathname === "/components/skeleton",
              icon: "",
              children: [],
            },
            {
              href: "/components/sonner",
              label: "sonner",
              active: pathname === "/components/sonner",
              icon: "",
              children: [],
            },
            {
              href: "/components/tabs",
              label: "tabs",
              active: pathname === "/components/tabs",
              icon: "",
              children: [],
            },
            {
              href: "/components/toast",
              label: "toast",
              active: pathname === "/components/toast",
              icon: "",
              children: [],
            },
            {
              href: "/components/toggle",
              label: "toggle",
              active: pathname === "/components/toggle",
              icon: "",
              children: [],
            },
            {
              href: "/components/tooltip",
              label: "tooltip",
              active: pathname === "/components/tooltip",
              icon: "",
              children: [],
            },
            {
              href: "/components/typography",
              label: "typography",
              active: pathname === "/components/typography",
              icon: "",
              children: [],
            },
            {
              href: "/components/colors",
              label: "colors",
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
          label: "maps",
          active: pathname.includes("/maps/maps-leaflet"),
          icon: "heroicons-outline:map",
          submenus: [
            {
              href: "/maps/maps-leaflet",
              label: "mapsLeaflet",
              active: pathname.includes("/maps/maps-leaflet"),
              icon: "",
              children: [],
            },
            {
              href: "/maps/maps-vector",
              label: "mapsVector",
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


