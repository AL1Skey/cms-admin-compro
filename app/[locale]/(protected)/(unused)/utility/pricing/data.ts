export const tables = [
  {
    title: "Advanced",
    price_Yearly: "$96",
    price_Monthly: "$26",
    button: "Buy now",
    bg: "bg-warning",
    img: "/images/all-img/big-shap1.png",
  },
  {
    title: "Business",
    price_Yearly: "$196",
    price_Monthly: "$20",
    button: "Buy now",
    bg: "bg-info",
    ribon: "Most popular",
    img: "/images/all-img/big-shap2.png",
  },
  {
    title: "Basic",
    price_Yearly: "$26",
    price_Monthly: "$16",
    button: "Try it free",
    bg: "bg-success",
    img: "/images/all-img/big-shap3.png",
  },
  {
    title: "Got a large team?",
    price_Yearly: "$126",
    price_Monthly: "$16",
    button: "Request a quote",
    bg: "bg-primary",
    img: "/images/all-img/big-shap4.png",
  },
];

export type Table = (typeof tables)[number];
export const tables2 = [
  {
    title: "Advanced",
    price_Yearly: "$96",
    price_Monthly: "$26",
    button: "Buy now",
    bg: "bg-white",
  },
  {
    title: "Business",
    price_Yearly: "$196",
    price_Monthly: "$20",
    button: "Buy now",
    bg: "bg-default-900",
    ribon: "Most popular",
  },
  {
    title: "Basic",
    price_Yearly: "$26",
    price_Monthly: "$16",
    button: "Try it free",
    bg: "bg-white",
  },
  {
    title: "Got a large team?",
    price_Yearly: "$126",
    price_Monthly: "$16",
    button: "Request a quote",
    bg: "bg-white",
  },
];
export type Table2 = (typeof tables2)[number];
