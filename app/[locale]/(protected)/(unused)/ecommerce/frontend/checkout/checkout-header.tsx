"use client";
import { usePathname } from "@/components/navigation";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

const CheckoutHeader = () => {
  const pathname = usePathname();

  const stepsArray = [
    {
      step: 0,
      icon: "mdi:cart-outline",
      title: "My Cart",
      href: "/ecommerce/frontend/checkout/cart",
      active: pathname.includes("/ecommerce/frontend/checkout/cart"),
    },
    {
      step: 1,
      icon: "streamline:shipping-transfer-cart-package-box-fulfillment-cart-warehouse-shipping-delivery",
      title: "Shipping Info",
      href: "/ecommerce/frontend/checkout/shipping-info",
      active: pathname.includes("/ecommerce/frontend/checkout/shipping-info"),
    },
    {
      step: 2,
      icon: "la:shipping-fast",
      title: "Delivery Info",
      href: "/ecommerce/frontend/checkout/delivery-info",
      active: pathname.includes("/ecommerce/frontend/checkout/delivery-info"),
    },
    {
      step: 3,
      icon: "fluent:payment-32-regular",
      title: "Payment",
      href: "/ecommerce/frontend/checkout/payment",
      active: pathname.includes("/ecommerce/frontend/checkout/payment"),
    },
    {
      step: 4,
      icon: "line-md:confirm-circle",
      title: "Confirmation",
      href: "/ecommerce/frontend/checkout/confirmation",
      active: pathname.includes("/ecommerce/frontend/checkout/confirmation"),
    },
  ];

  return (
    <div>

      <ul className="flex gap-4">
        {stepsArray.map(({ step, active, icon, title }, index) => {
          const isCurrentStep = active;
          const isPastStep = stepsArray.findIndex((item) => item.active) > step;

          return (
            <li
              key={index}
              className={cn(
                "flex-1 bg-default-50 items-center justify-center text-center border-solid lg:border border-default-300 rounded-t lg:border-b-8 rounded-b-lg xl:px-10 xl:py-7 lg:px-3 lg:py-6 transition-all duration-150",
                {
                  "border-b-success text-success": isPastStep,
                  "lg:border-b-8 border-b-default text-default-900": isCurrentStep,
                  "border-b-default-300 text-default-500": !isCurrentStep && !isPastStep,
                }
              )}
            >
              <div className="flex flex-col items-center justify-center space-y-3">
                <Icon
                  className={cn("h-8 w-8", {
                    "text-success": isPastStep,
                    "text-default": isCurrentStep,
                    "text-default-500": !isCurrentStep && !isPastStep,
                  })}
                  icon={icon}
                />
                <div
                  className={cn("", {
                    "text-default-900": isCurrentStep,
                    "text-success": isPastStep,
                    "text-default-500": !isCurrentStep && !isPastStep,
                  })}
                >
                  {step}.{title}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CheckoutHeader;
