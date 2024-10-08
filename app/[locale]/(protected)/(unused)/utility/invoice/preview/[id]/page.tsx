import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import Logo from "@/components/partials/auth/logo";
import { Button } from "@/components/ui/button";
import TotalTable from "./totaltable";

const InvoicePreviewPage = () => {
  return (
    <div>
      <div className="lg:flex justify-between flex-wrap items-center mb-6">
        <h4>title</h4>
        <div className="flex lg:justify-end items-center flex-wrap gap-4">
          <Button variant="soft" size="md">
            <span className="text-lg me-2">
              <Icon icon="heroicons:pencil-square" />
            </span>
            <span>Edit</span>
          </Button>
          <Button variant="soft" size="md">
            <span className="text-lg me-2">
              <Icon icon="heroicons:printer" />
            </span>
            <span>Print</span>
          </Button>
          <Button variant="soft" size="md">
            <span className="text-lg me-2">
              <Icon icon="heroicons:arrow-down-tray" />
            </span>
            <span>Download</span>
          </Button>
          <Button variant="soft" size="md">
            <span className="text-lg me-2 transform -rotate-45">
              <Icon icon="heroicons:paper-airplane" />
            </span>
            <span>Send invoice</span>
          </Button>
        </div>
      </div>
      <Card>
        <CardHeader className="bg-default-100">
          <div className="flex justify-between flex-wrap space-y-4">
            <div>
              <Logo />

              <div className="text-default-500 font-normal leading-5 mt-4 text-sm">
                Dashcode <br />
                House# 339, New DOHS, Mohakhali, <br />
                Dhaka - 1206, Bangladesh
                <div className="flex space-x-2 mt-2 leading-[1] rtl:space-x-reverse">
                  <Icon icon="heroicons-outline:phone" />
                  <span>(252) 555-0126,(201) 555-0124</span>
                </div>
                <div className="mt-[6px] flex space-x-2 leading-[1] rtl:space-x-reverse">
                  <Icon icon="heroicons-outline:mail" />
                  <span>Dashcode@example.com</span>
                </div>
              </div>
            </div>
            <div>
              <span className="block text-default-900 font-medium leading-5 text-xl">
                Bill to:
              </span>

              <div className="text-default-500 font-normal leading-5 mt-4 text-sm">
                Annette black-500 <br />
                4140 Parker Rd. Allentown, New <br />
                Mexico 31134
                <div className="flex space-x-2 mt-2 leading-[1] rtl:space-x-reverse">
                  <Icon icon="heroicons-outline:phone" />
                  <span>(252) 555-0126,(201) 555-0124</span>
                </div>
                <div className="mt-[6px] flex space-x-2 leading-[1] rtl:space-x-reverse">
                  <Icon icon="heroicons-outline:mail" />
                  <span>Dashcode@example.com</span>
                </div>
              </div>
            </div>
            <div className="space-y-[2px]">
              <span className="block text-default-900 font-medium leading-5 text-xl mb-4">
                Invoice:
              </span>
              <h4 className="text-default-600 font-medium text-xs uppercase">
                Invoice number:
              </h4>
              <div className="text-default-500 font-normal leading-5 text-sm">
                #89572935Kh
              </div>
              <h4 className="text-default-600 font-medium text-xs uppercase">
                date
              </h4>
              <div className="text-default-500 font-normal leading-5 text-sm">
                09 December 2021
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="max-w-[980px] mx-auto shadow-base dark:shadow-none my-8 rounded-md overflow-x-auto">
            <TotalTable />
          </div>
          <div className="py-10 text-center md:text-2xl text-xl font-normal text-default-600">
            Thank you for your purchase!
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InvoicePreviewPage;
