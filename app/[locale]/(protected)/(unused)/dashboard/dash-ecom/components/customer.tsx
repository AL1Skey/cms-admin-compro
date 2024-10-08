"use client"
import { Progress } from "@/components/ui/progress";
import { useTranslations } from "next-intl";
import Image from "next/image";
const customers = [
  {
    title: "Nicole Kidman",
    img: "/images/all-img/cus-1.png",
    value: 70,
    bg: "before:bg-info/30",
    barColor: "info",
    number: 2,
  },
  {
    title: "Monica Bellucci",
    img: "/images/all-img/cus-2.png",
    value: 80,
    bg: "before:bg-warning/30",
    barColor: "warning",
    active: true,
    number: 1,
  },
  {
    title: "Pamela Anderson",
    img: "/images/all-img/cus-3.png",
    value: 65,
    bg: "before:bg-success/30",
    barColor: "success",
    number: 3,
  },
  {
    title: "Dianne Russell",
    img: "/images/users/user-1.jpg",
    value: 60,
    bg: "before:bg-info/30",
    barColor: "info",
    number: 4,
  },
  {
    title: "Robert De Niro",
    img: "/images/users/user-2.jpg",
    value: 50,
    bg: "before:bg-warning/30",
    barColor: "warning",
    number: 5,
  },
  {
    title: "De Niro",
    img: "/images/users/user-3.jpg",
    value: 60,
    bg: "before:bg-warning/30",
    barColor: "warning",
    number: 6,
  }
];


const CustomerList = ({ item }: any) => {
    const t = useTranslations("EcommerceDashboard");
  return (
    <div className="relative  p-4 rounded md:flex items-center  md:space-x-10 md:space-y-0 space-y-3 rtl:space-x-reverse">
      <div
        className={`${
          item.active ? "ring-2 ring-[#FFC155]" : ""
        } h-10 w-10 rounded-full relative`}
      >
        {item.active && (
          <span className="crown absolute -top-[14px] left-1/2 -translate-x-1/2">
            <Image
              width={40}
              height={40}
              className="w-7 h-7"
              src="/images/icon/crown.svg"
              alt=""
            />
          </span>
        )}
        <Image
          src={item.img}
          alt=""
          width={100}
          height={100}
          className="w-full h-full rounded-full"
          priority
        />
        <span className="h-4 w-4 absolute right-0 bottom-0 rounded-full bg-[#FFC155] border border-white flex flex-col items-center justify-center text-white text-[10px] font-medium">
          {item.number}
        </span>
      </div>
      <h4 className="text-sm text-default-600 font-semibold">{item.title}</h4>
      <div className="inline-block text-center bg-default-900 text-default-100 px-2.5 py-1.5 text-xs font-medium rounded-full min-w-[60px]">
        {item.value}
      </div>
      <div className="flex-1">
        <div className="flex justify-between text-sm font-normal  mb-3">
          <span>{t("progress")}</span>
          <span className="font-normal">{item.value}%</span>
        </div>
        <Progress value={item.value} color={item.barColor} size="sm" />
      </div>
    </div>
  );
}
const CustomerCard = ({ item }: any) => {
  const t = useTranslations("EcommerceDashboard");
  return <div
    className={` relative z-[1] text-center p-4 rounded before:w-full before:h-[calc(100%-60px)] before:absolute before:left-0 before:top-[60px] before:rounded before:z-[-1] before:bg-opacity-[0.1] ${item.bg}`}
  >
    <div
      className={`${item.active ? "ring-2 ring-[#FFC155]" : ""
        } h-[70px] w-[70px] rounded-full mx-auto mb-4 relative`}
    >
      {item.active && (
        <span className="crown absolute -top-[24px] left-1/2 -translate-x-1/2">
          <Image width={40} height={40} className="w-7 h-7" src="/images/icon/crown.svg" alt="" />
        </span>
      )}
      <Image
        src={item.img}
        alt=""
        width={100}
        height={100}
        className="w-full h-full rounded-full"
        priority
      />
      <span className="h-[27px] w-[27px] absolute right-0 bottom-0 rounded-full bg-[#FFC155] border border-white flex flex-col items-center justify-center text-white text-xs font-medium">
        {item.number}
      </span>
    </div>
    <h4 className="text-sm text-default-600 font-semibold mb-4">
      {item.title}
    </h4>
    <div className="inline-block bg-default-900 text-default-100 px-2.5 py-1.5 text-xs font-medium rounded-full min-w-[60px]">
      {item.value}
    </div>
    <div>
      <div className="flex justify-between text-sm font-normal  mb-3 mt-4">
        <span>{t("progress")}</span>
        <span className="font-normal">{item.value}%</span>
      </div>
      <Progress value={item.value} color={item.barColor} size="sm" />
    </div>
  </div>;
};

const Customer = () => {
const t = useTranslations("EcommerceDashboard");
  return (
    <div className="pb-2">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {customers.slice(0, 3).map((item, i) => <CustomerCard item={item} key={`customer-${i}`} />)}
      </div>
      <div className="grid grid-cols-1 gap-5 mt-5">
        {customers.slice(3, 8).map((item, i) => <CustomerList item={item} key={`customer-item-${i}`} />)}
      </div>
    </div>
  );
};

export default Customer;