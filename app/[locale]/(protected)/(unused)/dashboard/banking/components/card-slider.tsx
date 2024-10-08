"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from 'swiper/modules';
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
const cardLists = [
  {
    bg: "from-[#1EABEC] to-primary ",
    cardNo: "****  ****  **** 3945",
    balance: "10,975"
  },
  {
    bg: "from-[#4C33F7] to-[#801FE0] ",
    cardNo: "****  ****  **** 3945",
    balance: "12,975"
  },
  {
    bg: "from-[#FF9838] to-[#008773]",
    cardNo: "****  ****  **** 3945",
    balance: "14,985"
  }
];
const CardSlider = () => {
    const t = useTranslations("BankingDashboard");
  return (
    <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]}>
      {cardLists.map((item, i) => (
        <SwiperSlide key={i}>
          <div
            className={cn(
              "h-[200px] bg-gradient-to-r relative rounded-md  p-4 text-white ",
              item.bg
            )}
          >
            <Image
              src="/images/all-img/visa-card-bg.png"
              alt=""
              fill
              sizes="(100vw, 100vh)"
              priority
            />
            <div className="relative ">
              <Image
                src="/images/logo/visa.svg"
                height={48}
                width={90}
                className="w-20 h-10"
                alt=""
              />
              <div className="mt-[18px] font-semibold text-lg mb-[17px]">
                {item.cardNo}
              </div>
              <div className="text-xs text-opacity-75 mb-0.5">
                {t("current_balance")}
              </div>
              <div className="text-2xl font-semibold">${item.balance}</div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSlider;
