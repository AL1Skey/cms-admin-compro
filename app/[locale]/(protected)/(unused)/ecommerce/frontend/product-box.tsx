import CounterButton from "./counter-button";
import { Link } from '@/i18n/routing';
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { product as ProductProps } from "./data";
import { useTranslations } from "next-intl";

const ProductBox = ({ product }: { product: ProductProps }) => {
  const t = useTranslations("EcommerceApp");
  return (
    <Card className="p-4 rounded-md group">
      <Link href={`/ecommerce/frontend/${product.id}`}>
        <div className=" bg-default-200 dark:bg-default-900 h-[191px] flex flex-col justify-center items-center mb-3 relative rounded-md">
          <div className="h-[146px]">
            <Image
              width={146}
              height={146}
              className="  h-full w-full  object-contain  transition-all duration-300 group-hover:scale-105"
              src={product.img}
              alt={product.name}
            />
            {product.percent && (
              <Badge
                color="destructive"
                className=" absolute ltr:left-2 rtl:right-2 top-3"
              >
                {product.percent}
              </Badge>
            )}
            <div className="hover-box flex flex-col invisible absolute ltr:right-2 rtl:left-2 top-2 opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 ">
              <div className="space-y-2">
                <Button
                  size="icon"
                  className="rounded-full group/item hover:ring-offset-0 bg-default-50 hover:bg-default-50 dark:bg-default-700  hover:ring-0"
                >
                  <Icon
                    icon="ph:heart-fill"
                    className="text-default-400  group-hover/item:text-destructive "
                  />
                </Button>
                <Button
                  size="icon"
                  className="rounded-full group/item hover:ring-offset-0 bg-default-50 hover:bg-default-50 dark:bg-default-700  hover:ring-0  "
                >
                  <Icon
                    icon="ph:eye"
                    className="text-default-400  group-hover/item:text-destructive  "
                  />
                </Button>
                <Button
                  size="icon"
                  className="rounded-full group/item hover:ring-offset-0 bg-default-50 hover:bg-default-50 dark:bg-default-700  hover:ring-0 "
                >
                  <Icon
                    icon="jam:refresh-reverse"
                    className="text-default-400  group-hover/item:text-destructive  "
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Link>

      <div>
        <div className="flex justify-between items-center ">
          <p className="text-xs	text-default-900 uppercase font-normal">
            {product.category}
          </p>
          {product.rating && (
            <span className="flex items-center text-default-900  font-normal text-xs space-x-1  rtl:space-x-reverse ">
              <Icon icon="ph:star-fill" className="text-yellow-400" />
              <span>{product.rating}</span>
            </span>
          )}
        </div>
        <h6 className="text-default-900 text-base	font-medium	mt-2 truncate	">
          <Link href={`/ecommerce/frontend/${product.id}`}>{product.name}</Link>
        </h6>
        <p className="text-default-500  text-xs  font-normal mt-1.5">
          {product.subtitle}
        </p>
        <p className="pb-4  mt-2">
          <span className="text-default-900 text-base	font-medium	 me-2 ">
            ${product.price}
          </span>
          <del className="text-default-500  font-normal text-base		">
            {product.oldPrice}
          </del>
        </p>

        <CounterButton />
      </div>
    </Card>
  );
};

export default ProductBox;
