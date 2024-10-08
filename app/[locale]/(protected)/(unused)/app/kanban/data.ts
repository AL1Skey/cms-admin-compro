import { faker } from "@faker-js/faker";

export const defaultCols = [
  {
    id: faker.string.uuid(),
    title: "Todo",
  },
  {
    id: faker.string.uuid(),
    title: "Work in progress",
  },
  {
    id: faker.string.uuid(),
    title: "Done",
  },
];

export const defaultTasks = [
  {
    id: faker.string.uuid(),
    columnId: defaultCols[0].id,
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
    columnId: defaultCols[0].id,
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
    columnId: defaultCols[1].id,
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
    columnId: defaultCols[1].id,
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
    columnId: defaultCols[1].id,
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
  },


];

export type Column = (typeof defaultCols)[number];

export type Task = (typeof defaultTasks)[number]