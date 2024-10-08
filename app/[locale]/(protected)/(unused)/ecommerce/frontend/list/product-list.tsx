import { Button } from "@/components/ui/button";
import { product as ProductProps } from "../data";
import { Icon } from "@/components/ui/icon";
import Image from "next/image";
import { Link } from '@/i18n/routing';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CounterButton from "../counter-button";
const ProductList = ({ product }: { product: ProductProps }) => {
  return (
    <Card className="p-3 rounded-md 2xl:flex lg:flex md:flex-none sm:flex-none group">
      <Link href={`/ecommerce/frontend/${product.id}`}>
        <div className=" bg-default-200 dark:bg-default-900  relative h-[259px] flex flex-col justify-center items-center rounded-md  mb-3 lg:mb-0   ltr:md:mr-0 ltr:sm:mr-0 rtl:md:ml-0 rtl:sm:ml-0 ltr:lg:mr-3 rtl:lg:ml-3">
          <div className="h-[235px]  w-[266px] p-12">
            <Image
              src={product.img}
              alt={product.name}
              width={235}
              height={235}
              className="  h-full w-full  object-contain  transition-all duration-300 group-hover:scale-105"
            />
            {product.percent && (
              <Badge className=" font-normal bg-destructive text-white absolute start-2  top-3">
                {product.percent}
              </Badge>
            )}
            <div className="hover-box flex flex-col invisible absolute end-2 top-2 opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 ">
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
        <p className="text-xs	text-default-900  font-normal uppercase pb-2">
          {product.category}
        </p>
        <h6 className="text-default-900  text-lg	font-medium	pb-2 w-full truncate">
          <Link href={`/ecommerce/frontend/${product.id}`}>{product.name}</Link>
        </h6>
        <p className="pb-2 space-x-2 rtl:space-x-reverse">
          <span className="text-default-900  text-lg	font-semibold ">
            ${product.price}
          </span>
          <del className="text-default-500 font-semibold text-lg">
            {product.oldPrice}
          </del>
        </p>
        {product.rating && (
          <span className="flex items-center text-default-900   font-normal text-xs space-x-[4px] rtl:space-x-reverse pb-3">
            <Icon icon="ph:star-fill" className="text-yellow-400" />
            <Icon icon="ph:star-fill" className="text-yellow-400" />
            <Icon icon="ph:star-fill" className="text-yellow-400" />
            <Icon icon="ph:star-fill" className="text-yellow-400" />
            <span className="ltr:pl-2 rtl:pr-2">{product.rating}</span>
          </span>
        )}
        <p className="text-default-500  text-sm  font-normal pb-4">
          {product.desc}
        </p>
        <div className="flex gap-4 max-w-[370px]">
          <CounterButton />


        </div>
      </div>
    </Card>
  );
};

export default ProductList;
