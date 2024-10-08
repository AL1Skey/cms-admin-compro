import { faker } from "@faker-js/faker";


export const defaultProjects = [
  {
    id: "c06d48bf-7f35-4789-b71e-d80fee5b430f",
    title: "CRM Dashboard ",
    projectLogo: "/images/project/p-2.png",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    startDate: "2022-10-03",
    endDate: "2022-10-06",
    progress: 90,
    assignee: [
      {
        image: "/images/avatar/av-1.svg",
        name: "Mahedi Amin",
      },
      {
        image: "/images/avatar/av-2.svg",
        name: "Sovo Haldar",
      },
      {
        image: "/images/avatar/av-3.svg",
        name: "Rakibul Islam",
      }
    ],
    remainingDays: 3
  },
  {
    id: faker.string.uuid(),
    title: "Business Dashboard ",
    projectLogo: "/images/project/p-2.png",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    startDate: "2022-10-03",
    endDate: "2022-10-06",
    progress: 90,
    assignee: [
      {
        image: "/images/avatar/av-1.svg",
        name: "Mahedi Amin",
      },
      {
        image: "/images/avatar/av-2.svg",
        name: "Sovo Haldar",
      },
      {
        image: "/images/avatar/av-3.svg",
        name: "Rakibul Islam",
      }
    ],
    remainingDays: 3
  },
  {
    id: faker.string.uuid(),
    title: "Management Dashboard ",
    projectLogo: "/images/project/p-2.png",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    startDate: "2022-10-03",
    endDate: "2022-10-06",
    progress: 90,
    assignee: [
      {
        image: "/images/avatar/av-1.svg",
        name: "Mahedi Amin",
      },
      {
        image: "/images/avatar/av-2.svg",
        name: "Sovo Haldar",
      },
      {
        image: "/images/avatar/av-3.svg",
        name: "Rakibul Islam",
      }
    ],
    remainingDays: 3
  },
  {
    id: faker.string.uuid(),
    title: "Analytics Dashboard ",
    projectLogo: "/images/project/p-2.png",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    startDate: "2022-10-03",
    endDate: "2022-10-06",
    progress: 90,
    assignee: [
      {
        image: "/images/avatar/av-1.svg",
        name: "Mahedi Amin",
      },
      {
        image: "/images/avatar/av-2.svg",
        name: "Sovo Haldar",
      },
      {
        image: "/images/avatar/av-3.svg",
        name: "Rakibul Islam",
      }
    ],
    remainingDays: 3
  },

  {
    id: faker.string.uuid(),
    title: "Marketing Dashboard ",
    projectLogo: "/images/project/p-2.png",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    startDate: "2022-10-03",
    endDate: "2022-10-06",
    progress: 90,
    assignee: [
      {
        image: "/images/avatar/av-1.svg",
        name: "Mahedi Amin",
      },
      {
        image: "/images/avatar/av-2.svg",
        name: "Sovo Haldar",
      },
      {
        image: "/images/avatar/av-3.svg",
        name: "Rakibul Islam",
      }
    ],
    remainingDays: 3
  }
];


export const getProjects = async () => {
  return defaultProjects
}

export const getProjectById = async (id: string) => {
  return defaultProjects.find(project => project.id === id)
}

interface ProjectNav {
  label: string
  href: string
  active: boolean
}

export function getProjectNav(pathname: string): ProjectNav[] {
  return [
    {
      label: 'grid view',
      href: "/app/projects/grid",
      active: pathname === "/app/projects/grid",
    },
    {
      label: 'list view',
      href: "/app/projects/list",
      active: pathname === "/app/projects/list",
    }
  ]
}

export type Project = (typeof defaultProjects)[number]