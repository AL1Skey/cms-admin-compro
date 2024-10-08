'use client'
import React from 'react'
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
const CounterButton = () => {
  const t = useTranslations("EcommerceApp");
  const [count, setCount] = React.useState<number>(1)
  const [show, setShow] = React.useState<boolean>(false)

  const handleIncreaseQuantity = () => {

    if (count < 10) {
      setCount(count + 1)
    }

  }
  const handleDecreaseQuantity = () => {

    if (count > 0) {
      setCount(count - 1)

    }

  }
  return (
    <>
      {!show && (
        <Button variant="outline" fullWidth size="md" onClick={() => setShow(true)}>
          <Icon
            icon="heroicons:shopping-cart"
            className="w-4 h-4 me-2 text-sm leading-none"
          />
          {t("add_to_cart")}
        </Button>
      )}
      {show && (
        <div className="flex gap-4 items-center ">
          <div className="flex-1 h-8 flex border border-1 border-default-900 delay-150 ease-in-out dark:border-default-600 divide-x-[1px] rtl:divide-x-reverse text-sm font-normal divide-default-900 dark:divide-default-600 rounded">
            <button
              onClick={handleDecreaseQuantity}
              type="button"
              className="flex-none px-2 dark:text-white text-default-900 hover:bg-default-900 hover:text-white dark:hover:bg-default-700 disabled:cursor-not-allowed disabled:opacity-50 "
            >
              <Icon icon="eva:minus-fill" />
            </button>

            <div className="flex-1 w-[62px] text-center flex items-center justify-center">
              {count}
            </div>
            <button

              onClick={handleIncreaseQuantity}
              type="button"
              className="flex-none px-2 disabled:cursor-not-allowed disabled:opacity-50 text-default-900 hover:bg-default-900 hover:text-white dark:text-white dark:hover:bg-default-700 rtl:dark:hover:rounded-l ltr:dark:hover:rounded-r"
            >
              <Icon icon="eva:plus-fill" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CounterButton;
