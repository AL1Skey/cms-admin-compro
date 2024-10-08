import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Link } from '@/i18n/routing';
import SiteBreadcrumb from "@/components/site-breadcrumb";

const settings = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <div className="flex gap-3 items-center">
              <div className="flex-none h-8 w-8 rounded-full bg-default-800  text-default-300 flex flex-col items-center justify-center text-lg">
                <Icon icon="heroicons:building-office-2" />
              </div>
              <div className="flex-1 text-base text-default-900  font-medium">
                Company Settings
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-default-600  text-sm">
              Set up your company profile, add your company logo, and more
            </div>
          </CardContent>
          <CardFooter>
            <Link
              href="#"
              className="inline-flex items-center gap-3 text-sm capitalize font-medium text-default-600 "
            >
              <span>Chnage Settings</span> <Icon icon="heroicons:arrow-right" />
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex gap-3 items-center">
              <div className="flex-none h-8 w-8 rounded-full bg-primary-500 text-default-300 flex flex-col items-center justify-center text-lg">
                <Icon icon="heroicons:credit-card" />
              </div>
              <div className="flex-1 text-base text-default-900  font-medium">
                Payment Settings
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-default-600  text-sm">
              Connect your bank account to your company profile, and more
            </div>
          </CardContent>
          <CardFooter>
            <Link
              href="#"
              className="inline-flex items-center gap-3 text-sm capitalize font-medium text-default-600 "
            >
              <span>Chnage Settings</span> <Icon icon="heroicons:arrow-right" />
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex gap-3 items-center">
              <div className="flex-none h-8 w-8 rounded-full bg-success text-white flex flex-col items-center justify-center text-lg">
                <Icon icon="heroicons:users" />
              </div>
              <div className="flex-1 text-base text-default-900  font-medium">
                Profile Settings
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-default-600  text-sm">
              Connect your bank account to your company profile, and more
            </div>
          </CardContent>
          <CardFooter>
            <Link
              href="#"
              className="inline-flex items-center gap-3 text-sm capitalize font-medium text-default-600 "
            >
              <span>Chnage Settings</span> <Icon icon="heroicons:arrow-right" />
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default settings;
