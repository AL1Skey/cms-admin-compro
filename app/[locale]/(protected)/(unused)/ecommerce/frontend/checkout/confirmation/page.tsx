import Image from "next/image";
import { getProducts } from "../../data";
import { Button } from "@/components/ui/button";
import { Link } from '@/i18n/routing';
import { Icon } from "@/components/ui/icon";

const Confirmation = async () => {
  const products = await getProducts();
  const items = products.slice(0, 4);
  return (
    <div className="p-6">
      <div className="text-center mb-8">
        <h4 className="text-default-900  text-2xl font-medium pb-4">
          Thank You for Your Order!
        </h4>
        <p className="text-default-900  text-base font-normal">
          A copy or your order summary has been sent to
          <span className="  text-base font-medium ml-1 cursor-pointer">
            customer@example.com
          </span>
        </p>
      </div>
      <div className="border border-solid border-default-300 p-3 lg:p-6 rounded">
        <p className="text-default-900  text-base font-medium pb-3 border-b border-solid border-default-300 mb-4">
          Order Summary
        </p>
        <div className=" md:flex md:gap-3 lg:gap-5 space-y-3">
          <div className="flex-1">
            <div className="flex gap-2 lg:gap-12 ">
              <div className=" font-medium  min-w-[110px] md:text-sm text-xs text-default-900   space-y-3 ">
                <p>Order Date:</p>
                <p>Name:</p>
                <p>Email:</p>
                <p>Shipping address:</p>
              </div>
              <div className="font-normal md:text-sm text-xs text-default-900   space-y-3 min-w-[110px] ">
                <p>23-07-2023 09:53 AM</p>
                <p>Prantik Chakraborty</p>
                <p>customer.example@gmail.com</p>
                <p>
                  3947 West Side Avenue Hackensack, NJ 07601, College, United
                  States
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex gap-2 lg:gap-12 ">
              <div className=" font-medium  min-w-[110px] md:text-sm text-xs text-default-900   space-y-3 ">
                <p>Order Status:</p>
                <p>Total order amount:</p>
                <p>Shipping:</p>
                <p>Payment method:</p>
              </div>
              <div className=" font-normal md:text-sm text-xs text-default-900   space-y-3 min-w-[110px] ">
                <p>Pending</p>
                <p>$350.00</p>
                <p>Flat shipping rate</p>
                <p>Cash on Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 text-center lg:text-2xl text-xl font-normal text-default-900 ">
        Order Code:{" "}
        <span className="lg:text-2xl text-xl font-medium">
          20230723-09532646
        </span>
      </div>
      <div className="p-3 md:p-6 rounded">
        <p className="text-default-900  text-base font-medium pb-3">
          Order Details
        </p>
        <div className="bg-trasparent  space-y-7">
          <div className="overflow-x-auto border-0">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden ">
                <table className="min-w-full divide-y divide-solid divide-default-300 table-fixed  ">
                  <thead className=" border-0 border-default-00 ">
                    <tr>
                      <th
                        scope="col"
                        className=" px-3 py-3 text-default-900  font-medium lg:text-base text-sm normal-case ps-0 text-start "
                      >
                        Product
                      </th>
                      <th
                        scope="col"
                        className=" px-3 py-3 text-default-900  font-medium lg:text-base text-sm normal-case text-start"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className=" px-3 py-3 text-default-900  font-medium lg:text-base text-sm normal-case text-start"
                      >
                        Delivery Type
                      </th>
                      <th
                        scope="col"
                        className=" px-3 py-3 text-default-900  font-medium lg:text-base text-sm normal-case pe-0 text-start last:text-right"
                      >
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-trasparent ">
                    {items?.map((item, i) => (
                      <tr key={i}>
                        <td className="px-3 flex items-center gap-3 py-3 pe-0  text-start last:text-right">
                          <div className="md:p-4 p-2 flex-none bg-default-200 dark:bg-default-800 rounded md:h-20 md:w-20 w-16 h-16 me-3">
                            <Image
                              className="w-full h-full object-contain"
                              src={item.img}
                              alt=""
                              width={100}
                              height={100}
                            />
                          </div>
                          <div>
                            <p className="text-default-900  lg:text-base text-sm font-normal md:pb-2 pb-1 lg:w-[380px] w-[150px] truncate">
                              {item.name}
                            </p>
                          </div>
                        </td>
                        <td className="px-3 py-3 text-default-900  text-sm lg:text-base font-normal text-start last:text-right">
                          1
                        </td>
                        <td className="px-3 py-3 text-default-900  text-sm lg:text-base font-normal text-start last:text-right">
                          Home Delivery
                        </td>
                        <td className="px-3 pt-3  pe-0 text-default-900  text-sm lg:text-base font-normal text-start last:text-right">
                          $180.00
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="md:flex  lg:py-6 py-3  items-center justify-end border-t border-solid border-default-300 mt-3">
                  <div className="flex-none min-w-[270px] space-y-3">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="font-medium text-default-900 text-xs lg:text-sm ">
                          Subtotal:
                        </span>
                        <span className="text-default-900  font-medium text-xs lg:text-sm">
                          $total hobe
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-default-900 text-xs lg:text-sm ">
                          Tax:
                        </span>
                        <span className="text-default-700  text-xs lg:text-sm font-normal">
                          $00.00
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-default-900 text-xs lg:text-sm ">
                          Shipping:
                        </span>
                        <span className="text-default-700  text-xs lg:text-sm font-normal">
                          $00.00
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-default-900 text-xs lg:text-sm ">
                          Coupon Discount:
                        </span>
                        <span className="text-default-700  text-xs lg:text-sm font-normal">
                          $00.00
                        </span>
                      </div>
                    </div>
                    <div className="border-t border-solid border-default-300 ">
                      <div className="flex justify-between pt-3">
                        <span className="font-medium text-default-900 text-xs lg:text-sm ">
                          Total:
                        </span>
                        <span className="text-default-900  text-xs lg:text-sm">
                          $total
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 md:mt-16 md:pb-14">
        <div className="flex-1">
          <Button asChild variant="outline">
            <Link href="/ecommerce/frontend">
              <Icon icon="ion:arrow-back-outline" className="me-1" />
              Return to Shop
            </Link>
          </Button>
        </div>
        <div className="flex-none">
          <Button asChild disabled>
            <Link href="/ecommerce/frontend/checkout/payment">Go Back</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
