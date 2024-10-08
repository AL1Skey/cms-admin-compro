import React from "react";
import { Icon } from "@/components/ui/icon";
import { getProducts } from "../../data";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Link } from '@/i18n/routing';
const CartPage = async () => {
  const products = await getProducts();
  const items = products.slice(0, 4);
  return (
    <div>
      <div className=" space-y-7">
        <div className="overflow-x-auto border-0">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden  border-solid border-default-300 border rounded-md">
              <table className="min-w-full divide-y divide-default-300 table-fixed  ">
                <thead className="border-0">
                  <tr>
                    <th scope="col" className=" text-left px-3 py-3">
                      Product
                    </th>
                    <th scope="col" className="  text-left py-3">
                      Price
                    </th>
                    <th scope="col" className="px-3 text-left py-3">
                      Quantity
                    </th>
                    <th scope="col" className=" text-left py-3">
                      Total
                    </th>
                    <th scope="col" className=" text-right py-3 pe-3">
                      Remove
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-trasparent divide-default-300">
                  {items.length > 0 ? (
                    items?.map((item, i) => (
                      <tr key={i}>
                        <td className="inline-flex items-center gap-3 py-3">
                          <div className="md:p-4 p-2 flex-none bg-default-200 dark:bg-default-900 rounded md:h-20 md:w-20 w-16 h-16 ms-3">
                            <Image
                              alt="product"
                              src={item.img}
                              width={100}
                              height={100}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div>
                            <p className="text-default-900  md:text-base text-sm font-medium md:pb-2 pb-1 md:w-[280px] w-[100px] truncate">
                              {item.name}
                            </p>
                            <p className="text-default-900  md:text-base text-sm font-medium">
                              <span className="text-default-500  font-normal mr-1">
                                Brand:
                              </span>
                              {item.brand}
                            </p>
                          </div>
                        </td>
                        <td className="px-3 py-3">${item.price}</td>
                        <td className=" px-3 py-3">
                          <div className="flex-1 h-8 w-[110px] flex border border-1 border-default-900 delay-150 ease-in-out  divide-x-[1px] rtl:divide-x-reverse text-sm font-normal divide-default-900  rounded">
                            <button className="md:px-3 px-2 disabled:cursor-not-allowed">
                              <Icon icon="eva:minus-fill" />
                            </button>

                            <span className="flex-1 text-xs  text-center flex items-center justify-center">
                              0
                            </span>
                            <button className="md:px-3 px-2 disabled:cursor-not-allowed">
                              <Icon icon="eva:plus-fill" />
                            </button>
                          </div>
                        </td>
                        <td className=" px-3 py-3">${item.price}</td>
                        <td className=" text-right  px-6 py-3">
                          <button className="bg-default-100 text-default-400 p-2.5 transition-all  mb-1.5 rounded-full hover:bg-destructive/20   hover:text-destructive duration-200 ">
                            <Icon icon="heroicons:trash" />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className=" text-center h-24 " colSpan={5}>
                        {`No result's`}
                      </td>
                    </tr>
                  )}
                </tbody>
                <tfoot className="mx-6">
                  <tr className="border-t border-default-300 border-solid">
                    <td className=" px-3 py-3 " colSpan={4}>
                      <p className="md:text-base text-sm font-medium text-default-500 ">
                        Subtotal:
                      </p>
                    </td>
                    <td className=" px-6 py-3 text-right">
                      <p className="md:text-base text-sm font-medium text-default-900 ">
                        $200
                      </p>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 md:mt-16 md:pb-14">
        <div className="flex-1">
          <Button asChild
            variant="outline">
            <Link href="/ecommerce/frontend">
              <Icon icon="ion:arrow-back-outline" className="me-1" />
              Add New Product
            </Link>
          </Button>
        </div>
        <div className="flex-none">
          <Button asChild disabled>
            <Link href="#">Go Back</Link>
          </Button>
        </div>
        <div className="flex-none">
          <Button asChild>
            <Link href="/ecommerce/frontend/checkout/shipping-info"> Continue to shipping</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
