import { DataProps } from "./columns";

export const data: DataProps[] = [
  {
    id: 1,
    customer: {
      name: "Jenny Wilson",
      image: "/images/all-img/customer_1.png",
    },
    date: "3/26/2022",
    history: {
      transId: "8HG654Pk32",
    },
    amount: "$1779.53",
    status:"paid",
    action: null,
  },
  {
    id: 2,
    customer: {
      name: "Emily Davis",
      image: "/images/all-img/cus-1.png",
    },
    date: "2/6/2022",
    history: {
      transId: "8HG654Pk33"
    },
    amount: "$2215.78",
    status:"due",
    action: null,
  },
  {
    id: 3,
    customer: {
      name: "Laura Smith",
      image: "/images/avatar/avatar-1.png",
    },
    date: "9/6/2021",
    history: {
      transId: "8HG654Pk34"
    },
    amount: "$3183.60",
    status:"cancel",
    action: null,
  },
  {
    id: 4,
    customer: {
      name: "Sarah Johnson",
      image: "/images/avatar/avatar-2.png",
    },
    date: "11/7/2021",
    history: {
      transId: "8HG654Pk35"
    },
    amount: "$2587.86",
    status:"paid",
    action: null,
  }
];
