const rows = [
  {
    item: "Headphone",
    tax: "$0.00",
    delivery:"home delivery",
    qty: 2,
    price: "$600.25",
    total: "$1200.50",
  },
  {
    item: "Headphone",
    tax: "$0.00",
    delivery:"home delivery",
    qty: 2,
    price: "$600.25",
    total: "$1200.50",
  },
  {
    item: "Headphone",
    tax: "$0.00",
    delivery:"home delivery",
    qty: 2,
    price: "$600.25",
    total: "$1200.50",
  },
  {
    item: "Headphone",
    tax: "$0.00",
    delivery:"home delivery",
    qty: 2,
    price: "$600.25",
    total: "$1200.50",
  },
];

const TotalTable = () => {
  return (
    <>
      <table className="w-full">
        <thead>
          <tr>
            <th
              colSpan={3}
              className="bg-default-50  text-xs  font-medium leading-4 uppercase text-default-600 text-left last:text-right "
            >
              <span className="block px-6 py-5 font-semibold">ITEM</span>
            </th>
            <th className="bg-default-50  text-xs  font-medium leading-4 uppercase text-default-600 text-left last:text-right ">
              <span className="block px-6 py-5 font-semibold">
                Delivery Type
              </span>
            </th>
            <th className="bg-default-50  text-xs  font-medium leading-4 uppercase text-default-600 text-left last:text-right ">
              <span className="block px-6 py-5 font-semibold">Quantity</span>
            </th>
            <th className="bg-default-50  text-xs  font-medium leading-4 uppercase text-default-600 text-left last:text-right ">
              <span className="block px-6 py-5 font-semibold">Unit PRICE</span>
            </th>
            <th className="bg-default-50  text-xs  font-medium leading-4 uppercase text-default-600 text-left last:text-right ">
              <span className="block px-6 py-5 font-semibold">Tax</span>
            </th>
            <th className="bg-default-50  text-xs  font-medium leading-4 uppercase text-default-600 text-left last:text-right ">
              <span className="block px-6 py-5 font-semibold">TOTAL</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((data, index) => (
            <tr
              key={index}
              className="border-b border-default-100 border-solid  border-0"
            >
              <td
                colSpan={3}
                className="text-default-900  text-sm  font-normal text-left last:text-right  px-6 py-4"
              >
                {data.item}
              </td>
              <td className="text-default-900  text-sm  font-normal text-left last:text-right  px-6 py-4">
                {data.delivery}
              </td>
              <td className="text-default-900  text-sm  font-normal text-left last:text-right  px-6 py-4">
                {data.qty}
              </td>
              <td className="text-default-900  text-sm  font-normal text-left last:text-right  px-6 py-4">
                {data.price}
              </td>
              <td className="text-default-900  text-sm  font-normal text-left last:text-right  px-6 py-4">
                {data.tax}
              </td>
              <td className="text-default-900  text-sm  font-normal text-left last:text-right  px-6 py-4">
                {data.total}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="md:flex px-6 py-6 items-center">
        <div className="flex-1 text-default-500  text-sm">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit <br />
          officia consequat duis enim velit mollit.
        </div>
        <div className="flex-none min-w-[270px] space-y-3 ">
          <div className="flex justify-between">
            <span className="font-medium text-default-600 text-xs  uppercase">
              Subtotal:
            </span>
            <span className="text-default-900 ">$3601.50</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-default-600 text-xs  uppercase">
              Tax (3.5%):
            </span>
            <span className="text-default-900 ">$20.50</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-default-600 text-xs  uppercase">
              Shipping:
            </span>
            <span className="text-default-900 ">$20.50</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-default-600 text-xs  uppercase">
              Coupon Discount:
            </span>
            <span className="text-default-900 ">$20.50</span>
          </div>
          <div className="flex justify-between border-solid border-t border-default-200 pt-3">
            <span className="font-medium text-default-600 text-xs  uppercase">
              Invoice total:
            </span>
            <span className="text-default-900  font-bold">$3622.00</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalTable;
