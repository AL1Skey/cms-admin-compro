"use client"
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { Link } from '@/i18n/routing';
import { useState } from "react";

const users = [
  {
    name: "Ab",
  },
  {
    name: "Bc",
  },
  {
    name: "Cd",
  },
  {
    name: "Df",
  },
  {
    name: "Ab",
  },
  {
    name: "Sd",
  },
  {
    name: "Sg",
  },
];
const AmountTransfer = () => {
  const t = useTranslations("BankingDashboard");
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="space-y-6">
      <div className="bg-default-50 rounded-md p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="text-lg text-default-900 flex-1">{t("contacts")}</div>
          <Link
            href="#"
            className="flex-none font-medium text-default-900  underline text-sm"
          >
            {t("view_all")}
          </Link>
        </div>
        <div className="flex overflow-x-auto gap-6 py-3 px-1">
          {users.map((user, index) => (
            <Avatar
              key={index}
              color="primary"
              className={cn("", {
                "ring-2 ring-primary ring-offset-2": index === activeIndex,
              })}
              onClick={() => setActiveIndex(index)}
            >
              <AvatarFallback className="text-lg">{user.name}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      </div>
      <div className="bg-default-100 rounded-md p-4">
        <Label
          className="text-xs text-default-500   mb-1 cursor-pointer font-normal"
          htmlFor="cdp"
        >
          {t("total_amount")}
        </Label>
        <Input
          placeholder="$6547"
          id="cdp"
          className="bg-transparent border-none px-0 py-0 placeholder:text-default-400 text-base font-medium text-default-900"
        />
      </div>
      <div className="bg-default-100 rounded-md p-4">
        <Label
          className="text-xs text-default-500   mb-1 cursor-pointer font-normal"
          htmlFor="cd"
        >
          {t("recipient_account_number")}
        </Label>
        <Input
          placeholder="3458-3548-6548-3244"
          id="cd"
          className="bg-transparent border-none px-0 py-0 placeholder:text-default-400 text-base font-medium text-default-900"
        />
      </div>
      <div className="flex items-center gap-2">
        <div className="flex-1">
          <div className="text-xs text-default-500  mb-1">
            {t("total_amount")}
          </div>
          <div className="text-lg font-medium text-default-900">$6547</div>
        </div>
        <Button className="flex-none"> {t("send_money")} </Button>
      </div>
    </div>
  );
};

export default AmountTransfer;