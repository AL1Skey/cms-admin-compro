import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Icon } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupButton } from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";

import { categories, brands, prices, ratings } from "./data";
import { useTranslations } from "next-intl";
const Sidebar = () => {
  const t = useTranslations("EcommerceApp");
  return (
    <Card className="hidden lg:block">
      <CardHeader className="pb-0">
        <div className="relative">
          <Icon
            icon="heroicons:magnifying-glass"
            className="absolute start-2 top-1/2 -translate-y-1/2 text-default-500"
          />
          <Input
            type="text"
            placeholder="Search.."
            className="ps-7"
            size="md"
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-6  divide-y divide-default-200  ">
        <div className="space-y-2">
          <div className="text-default-800  font-semibold text-xs uppercase pt-5 pb-2">
            {t("categories")}
          </div>
          {categories.map((category, i) => (
            <div
              key={`category_key_${i}`}
              className="flex justify-between items-center space-y-1"
            >
              <div className="flex gap-3 items-center">
                <Checkbox id={`category_key_${i}`} />
                <Label
                  className="text-default-800 font-normal"
                  htmlFor={`category_key_${i}`}
                >
                  {category.label}
                </Label>
              </div>
              <span className="text-default-500 font-semibold text-xs">
                {category.count}
              </span>
            </div>
          ))}

          <button className="text-xs font-medium text-default-900 pt-1">
            {t("view_less")}
          </button>
        </div>
        <div className="space-y-2 ltr:-ml-6 ltr:pl-6 rtl:-mr-6 rtl:pr-6">
          <div className="text-default-800 font-semibold text-xs uppercase pt-5 pb-2">
            {t("brands")}
          </div>
          {brands.map((brand, i) => (
            <div
              key={`brand_key_${i}`}
              className="flex justify-between items-center space-y-1"
            >
              <div className="flex gap-3 items-center">
                <Checkbox id={`brand_key_${i}`} />
                <Label
                  className="text-default-800 font-normal"
                  htmlFor={`brand_key_${i}`}
                >
                  {brand.label}
                </Label>
              </div>
              <span className="text-default-500  text-xs">{brand.count}</span>
            </div>
          ))}
          <button className="text-xs font-medium text-default-900 pt-1">
            {t("view_less")}
          </button>
        </div>
        <div className="space-y-2 ltr:-ml-6 ltr:pl-6 rtl:-mr-6 rtl:pr-6">
          <div className="text-default-800 font-semibold text-xs uppercase pt-5 pb-2">
            {t("price")}
          </div>
          {prices.map((price, i) => (
            <div
              key={`price_${i}`}
              className="flex justify-between items-center space-y-1"
            >
              <div className="flex gap-3 items-center">
                <Checkbox id={`price_${i}`} />
                <Label
                  className="text-default-800 font-normal"
                  htmlFor={`price_${i}`}
                >
                  {price.label}
                </Label>
              </div>
              <span className="text-default-500  text-xs">{price.count}</span>
            </div>
          ))}
        </div>
        <div className="space-y-2 ltr:-ml-6 ltr:pl-6 rtl:-mr-6 rtl:pr-6">
          <div className="text-default-800 font-semibold text-xs uppercase pt-5 pb-2">
            {t("ratings")}
          </div>
          {ratings.map((rating, i) => (
            <div
              key={`rating_${i}`}
              className="flex justify-between items-center space-y-1"
            >
              <div className="flex gap-3 items-center">
                <Checkbox id={`rating_${i}`} />
                <Icon
                  icon="heroicons:star-solid"
                  className="w-4 h-4 text-warning"
                />
                <span>{rating.name}</span>
              </div>
              <span className="text-default-500  text-xs">{rating.count}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Sidebar;
