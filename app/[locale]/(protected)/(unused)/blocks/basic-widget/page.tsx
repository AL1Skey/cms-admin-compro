
import { UpgradeBlock } from "@/components/blocks/upgrade-block";
import { WelcomeBlock, BlockBadge } from "@/components/blocks/welcome-block";
import SiteBreadcrumb from "@/components/site-breadcrumb";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import Image from "next/image";

const WidgetPage = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <div className="space-y-5" >
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {/* Block 1 */}
          <WelcomeBlock >
            <div className="max-w-[180px] relative z-10">
              <h4 className="text-xl font-medium text-primary-foreground dark:text-default-900 mb-2">
                Upgrade your Dashcode
              </h4>
              <p className="text-sm text-primary-foreground dark:text-default-800 text-opacity-80">
                Pro plan for better results
              </p>
            </div>
            <BlockBadge>Now</BlockBadge>
            <Image
              src="/images/all-img/widget-bg-3.png"
              width={400}
              height={150}
              priority
              alt="Description of the image"
              className="absolute top-0 start-0 w-full h-full object-cover rounded-md"
            />
          </WelcomeBlock>
          {/* Block 2 */}
          <WelcomeBlock >
            <div className="max-w-[180px] relative z-10">
              <div className="text-xl font-medium text-default-900 dark:text-default-100 mb-2">
                Upgrade your Dashcode
              </div>
              <p className="text-sm text-default-800 dark:text-default-100">
                Pro plan for better results
              </p>
            </div>
            <BlockBadge>Now</BlockBadge>
            <Image
              src="/images/all-img/widget-bg-1.png"
              width={400}
              height={150}
              alt="Description of the image"
              className="absolute top-0 start-0 w-full h-full object-cover rounded-md"
            />
          </WelcomeBlock>
          {/* Block 3 */}
          <WelcomeBlock >
            <div className="max-w-[180px] relative z-10">
              <div className="text-xl font-medium text-default-900 dark:text-default-100 mb-2">
                Upgrade your Dashcode
              </div>
              <p className="text-sm text-default-800 dark:text-default-100">
                Pro plan for better results
              </p>
            </div>
            <BlockBadge>Now</BlockBadge>
            <Image
              src="/images/all-img/widget-bg-3-1.png"
              width={400}
              height={150}
              alt="Description of the image"
              className="absolute top-0 start-0 w-full h-full object-cover rounded-md"
            />
          </WelcomeBlock>
          {/* Block 4 */}
          <WelcomeBlock >
            <div className="max-w-[180px] relative z-10">
              <h4 className="text-xl font-medium text-primary-foreground dark:text-default-900 mb-2">
                <span className="block font-normal">Good evening,</span>
                <span className="block">Mr. Dianne Russell</span>
              </h4>
              <p className="text-sm text-primary-foreground dark:text-default-900 font-normal">
                Welcome to Dashcode
              </p>
            </div>
            <Image
              src="/images/all-img/widget-bg-2.png"
              width={400}
              height={150}
              alt="Description of the image"
              className="absolute top-0 start-0 w-full h-full object-cover rounded-md"
            />
          </WelcomeBlock>
          {/* Block 5 */}
          <WelcomeBlock className="flex items-center" >
            <div className="flex-1 relative z-10">
              <div className="max-w-[180px]">
                <div className="text-xl font-medium text-default-900 dark:text-default-100 mb-2">
                  <span className="block font-normal">Good evening,</span>
                  <span className="block">Mr. Dianne Russell</span>
                </div>
                <p className="text-sm text-default-900 dark:text-default-100 font-normal">
                  Welcome to Dashcode
                </p>
              </div>
            </div>
            <div className="flex-none relative w-[120px] z-10">
              <Image
                src="/images/all-img/widgetvector.png"
                alt=""
                width={220}
                height={100}
                className="w-full h-full"
              />
            </div>
            <Image
              src="/images/all-img/widget-bg-4.png"
              width={400}
              height={150}
              alt="Description of the image"
              className="absolute top-0 start-0 w-full h-full object-cover rounded-md"
            />
          </WelcomeBlock>
          {/* block 6 */}
          <WelcomeBlock className="flex items-center" >
            <div className="flex-1 relative z-10">
              <div className="max-w-[180px]">
                <div className="text-xl font-medium text-primary-foreground  mb-2">
                  <span className="block font-normal">Good evening,</span>
                  <span className="block">Mr. Dianne Russell</span>
                </div>
                <p className="text-sm text-wgite text-primary-foreground  font-normal">
                  Welcome to Dashcode
                </p>
              </div>
            </div>
            <div className="flex-none relative z-10">
              <Image
                alt=""
                src="/images/all-img/widgetvector2.png"
                className="ms-auto w-[100px] h-[80px]"
                width={120}
                height={100}
              />
            </div>
            <Image
              src="/images/all-img/widget-bg-5.png"
              width={400}
              height={150}
              priority
              alt="Description of the image"
              className="absolute top-0 start-0 w-full h-full object-cover rounded-md"
            />
          </WelcomeBlock>
          {/* Block 7 */}
          <WelcomeBlock className="bg-default" >
            <div className="max-w-[180px] relative z-10">
              <h4 className="text-xl font-medium text-primary-foreground mb-2">
                Upgrade your Dashcode
              </h4>
              <p className="text-sm text-primary-foreground text-opacity-80">
                Pro plan for better results
              </p>
            </div>
            <BlockBadge className="bg-destructive text-destructive-foreground dark:bg-default-100 dark:text-default-900">Now</BlockBadge>

          </WelcomeBlock>
          {/* Block 8 */}
          <WelcomeBlock className="bg-primary" >
            <div className="max-w-[180px] relative z-10">
              <h4 className="text-xl font-medium text-primary-foreground dark:text-default-900 mb-2">
                Upgrade your Dashcode
              </h4>
              <p className="text-sm text-primary-foreground dark:text-default-900 text-opacity-80">
                Pro plan for better results
              </p>
            </div>
            <BlockBadge className="bg-success text-success-foreground">Now</BlockBadge>
          </WelcomeBlock>
          {/* Block 9 */}
          <WelcomeBlock className="bg-gradient-to-r from-primary to-success" >
            <div className="max-w-[180px] relative z-10">
              <h4 className="text-xl font-medium text-primary-foreground dark:text-default-900 mb-2">
                Upgrade your Dashcode
              </h4>
              <p className="text-sm text-primary-foreground dark:text-default-900 text-opacity-80">
                Pro plan for better results
              </p>
            </div>
            <BlockBadge className="bg-warning text-warning-foreground">Now</BlockBadge>
          </WelcomeBlock>
          {/* Block 10 */}
          <WelcomeBlock className="flex items-center py-7" >
            <div className="flex-1 relative z-10">
              <div className="max-w-[180px]">
                <h4 className="text-2xl font-medium text-primary-foreground dark:text-default-900 mb-2">
                  <span className="block text-sm">Current balance,</span>
                  <span className="block">$34,564</span>
                </h4>
              </div>
            </div>
            <div className="flex-none relative z-10">
              <Button
                color="primary"
                className="hover:ring-0 hover:ring-offset-0 "
              >
                <Eye className="w-4 h-4 text-primary-foreground me-2" />
                View details
              </Button>
            </div>
            <Image
              src="/images/all-img/widget-bg-6.png"
              width={400}
              height={150}
              alt="Description of the image"
              className="absolute top-0 start-0 w-full h-full object-cover rounded-md"
            />
          </WelcomeBlock>
          {/* Block 11 */}
          <WelcomeBlock className="flex items-center py-7" >
            <div className="flex-1 relative z-10">
              <div className="max-w-[180px]">
                <h4 className="text-2xl font-medium mb-2">
                  <span className="block text-sm text-default-800 dark:text-default-100">Current balance,</span>
                  <span className="block text-default-900 dark:text-default-100">$34,564</span>
                </h4>
              </div>
            </div>
            <div className="flex-none relative z-10">
              <Button
                color="primary"
                className="hover:ring-0 hover:ring-offset-0 "
              >
                <Eye className="w-4 h-4 text-primary-foreground me-2" />
                View details
              </Button>
            </div>
            <Image
              src="/images/all-img/widget-bg-7.png"
              width={400}
              height={150}
              priority
              alt="Description of the image"
              className="absolute top-0 start-0 w-full h-full object-cover rounded-md"
            />
          </WelcomeBlock>
          {/* Block 12 */}
          <WelcomeBlock className="flex items-center py-7" >
            <div className="flex-1 relative z-10">
              <div className="max-w-[180px]">
                <h4 className="text-2xl font-medium  mb-2">
                  <span className="block text-sm text-default-800 dark:text-default-100">Current balance,</span>
                  <span className="block text-default-900 dark:text-default-100">$34,564</span>
                </h4>
              </div>
            </div>
            <div className="flex-none relative z-10">
              <Button
                color="primary"
                className="hover:ring-0 hover:ring-offset-0 "
              >
                <Eye className="w-4 h-4 text-primary-foreground me-2" />
                View details
              </Button>
            </div>
            <Image
              src="/images/all-img/widget-bg-8.png"
              width={400}
              height={150}
              priority
              alt="Description of the image"
              className="absolute top-0 start-0 w-full h-full object-cover rounded-md"
            />
          </WelcomeBlock>
        </div>
        {/* Upgrade Block */}
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          <UpgradeBlock className="bg-default dark:bg-default-50">
            <div className="max-w-[168px] relative z-10">
              <div className="text-base font-medium text-default-foreground dark:text-default-900">Unlimited Access</div>
              <div className="text-xs font-normal text-default-foreground dark:text-default-800">
                Upgrade your system to business plan
              </div>
            </div>
            <div className="mt-6 mb-14 relative z-10">
              <Button
                size="md"
                className="bg-default-foreground text-default hover:bg-default-foreground hover:opacity-80 dark:bg-default dark:text-default-100 font-medium"
              >
                Upgrade
              </Button>
            </div>
            <div className="absolute bottom-0 start-0 z-10 w-full">
              <Image
                src="/images/svg/line.svg"
                width={500}
                height={200}
                alt="Line Image"
                draggable={false}
              />
            </div>
            <div className="absolute -bottom-4 end-5">
              <Image
                src="/images/svg/rabit.svg"
                width={96}
                height={96}
                alt="Rabbit"
                draggable={false}
                className="w-full h-full object-cover"
              />
            </div>
          </UpgradeBlock>
          <UpgradeBlock className="bg-primary">
            <div className="max-w-[168px] relative z-10">
              <div className="text-base font-medium text-default-foreground dark:text-default-900">Unlimited Access</div>
              <div className="text-xs font-normal text-default-foreground dark:text-default-800">
                Upgrade your system to business plan
              </div>
            </div>
            <div className="mt-6 mb-14 relative z-10">
              <Button
                size="md"
                className="bg-default-foreground text-default hover:bg-default-foreground hover:opacity-80 dark:bg-default dark:text-default-100 font-medium"
              >
                Upgrade
              </Button>
            </div>
            <div className="absolute bottom-0 start-0 z-10 w-full">
              <Image
                src="/images/svg/line.svg"
                width={500}
                height={200}
                alt="Line Image"
                draggable={false}
              />
            </div>
            <div className="absolute -bottom-4 end-5">
              <Image
                src="/images/svg/rabit.svg"
                width={96}
                height={96}
                alt="Rabbit"
                draggable={false}
                className="w-full h-full object-cover"
              />
            </div>
          </UpgradeBlock>
          <UpgradeBlock className="bg-success">
            <div className="max-w-[168px] relative z-10">
              <div className="text-base font-medium text-default-foreground dark:text-default-900">Unlimited Access</div>
              <div className="text-xs font-normal text-default-foreground dark:text-default-800">
                Upgrade your system to business plan
              </div>
            </div>
            <div className="mt-6 mb-14 relative z-10">
              <Button
                size="md"
                className="bg-default-foreground text-default hover:bg-default-foreground hover:opacity-80 dark:bg-default dark:text-default-100 font-medium"
              >
                Upgrade
              </Button>
            </div>
            <div className="absolute bottom-0 start-0 z-10 w-full">
              <Image
                src="/images/svg/line.svg"
                width={500}
                height={200}
                alt="Line Image"
                draggable={false}
              />
            </div>
            <div className="absolute -bottom-4 end-5">
              <Image
                src="/images/svg/rabit.svg"
                width={96}
                height={96}
                alt="Rabbit"
                draggable={false}
                className="w-full h-full object-cover"
              />
            </div>
          </UpgradeBlock>
          <UpgradeBlock className="bg-info">
            <div className="max-w-[168px] relative z-10">
              <div className="text-base font-medium text-default-foreground dark:text-default-900">Unlimited Access</div>
              <div className="text-xs font-normal text-default-foreground dark:text-default-800">
                Upgrade your system to business plan
              </div>
            </div>
            <div className="mt-6 mb-14 relative z-10">
              <Button
                size="md"
                className="bg-default-foreground text-default hover:bg-default-foreground hover:opacity-80 dark:bg-default dark:text-default-100 font-medium"
              >
                Upgrade
              </Button>
            </div>
            <div className="absolute bottom-0 start-0 z-10 w-full">
              <Image
                src="/images/svg/line.svg"
                width={500}
                height={200}
                alt="Line Image"
                draggable={false}
              />
            </div>
            <div className="absolute -bottom-4 end-5">
              <Image
                src="/images/svg/rabit.svg"
                width={96}
                height={96}
                alt="Rabbit"
                draggable={false}
                className="w-full h-full object-cover"
              />
            </div>
          </UpgradeBlock>

        </div>
        {/* gift block */}

        <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          <UpgradeBlock
            className="bg-default dark:bg-default-200 mt-14">
            <div className="absolute start-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/images/svg/gift.svg"
                alt="image"
                height={72}
                width={72}
                className="h-16 w-16"
              />
            </div>
            <div className="max-w-[160px] mx-auto mt-10">
              <div className="text-base font-medium text-default-foreground dark:text-default-900">Unlimited Access</div>
              <div className="text-xs font-normal text-default-foreground dark:text-default-900 mt-1">
                Upgrade your system to business plan
              </div>
            </div>
            <div className="mt-6">
              <Button fullWidth size="md"
                className="bg-primary-foreground dark:bg-white hover:ring-0  hover:ring-offset-0  ring-offset-transparent dark:text-default-100 hover:bg-primary-foreground hover:text-default hover:opacity-90 text-default">
                Upgrade
              </Button>
            </div>
          </UpgradeBlock>
          {
            ["primary", "success", "info", "destructive", "warning"].map((item, index) => (
              <UpgradeBlock
                key={index}
                className={`bg-${item} mt-14`}>
                <div className="absolute start-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                  <Image
                    src="/images/svg/gift.svg"
                    alt="image"
                    height={72}
                    width={72}
                    className="h-16 w-16"
                  />
                </div>
                <div className="max-w-[160px] mx-auto mt-10">
                  <div className="text-base font-medium text-default-foreground dark:text-default-900">Unlimited Access</div>
                  <div className="text-xs font-normal text-default-foreground dark:text-default-900 mt-1">
                    Upgrade your system to business plan
                  </div>
                </div>
                <div className="mt-6">
                  <Button fullWidth size="md" className="bg-primary-foreground hover:ring-0  hover:ring-offset-0 ring-offset-transparent dark:bg-white dark:text-default-100 hover:bg-primary-foreground hover:text-default hover:opacity-90 text-default">
                    Upgrade
                  </Button>
                </div>
              </UpgradeBlock>
            ))
          }
        </div>
        {/* rabbit block */}
        <div className="grid grid-cols-6 gap-5">
          <UpgradeBlock
            className="bg-default dark:bg-default-200 mt-14">
            <div className="absolute start-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/images/svg/rabit.svg"
                alt="image"
                height={100}
                width={100}
                className="h-24 w-24"
              />
            </div>
            <div className="max-w-[160px] mx-auto mt-14">
              <div className="text-base font-medium text-default-foreground dark:text-default-900">Unlimited Access</div>
              <div className="text-xs font-normal text-default-foreground mt-1 dark:text-default-900">
                Upgrade your system to business plan
              </div>
            </div>
            <div className="mt-6">
              <Button fullWidth size="md" className="bg-primary-foreground hover:ring-0  hover:ring-offset-0 ring-offset-transparent dark:bg-white dark:text-default-100 hover:bg-primary-foreground hover:text-default hover:opacity-90 text-default">
                Upgrade
              </Button>
            </div>
          </UpgradeBlock>
          {
            ["primary", "success", "info", "destructive", "warning"].map((item, index) => (
              <UpgradeBlock key={index} className={`bg-${item} mt-14`}>
                <div className="absolute start-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                  <Image
                    src="/images/svg/rabit.svg"
                    alt="image"
                    height={100}
                    width={100}
                    className="h-24 w-24"
                  />
                </div>
                <div className="max-w-[160px] mx-auto mt-14">
                  <div className="text-base font-medium text-default-foreground dark:text-default-900">Unlimited Access</div>
                  <div className="text-xs font-normal text-default-foreground  dark:text-default-900 mt-1">
                    Upgrade your system to business plan
                  </div>
                </div>
                <div className="mt-6">
                  <Button fullWidth size="md" className="bg-primary-foreground hover:ring-0  hover:ring-offset-0 ring-offset-transparent dark:bg-white dark:text-default-100 hover:bg-primary-foreground hover:text-default hover:opacity-90 text-default">
                    Upgrade
                  </Button>
                </div>
              </UpgradeBlock>
            ))
          }
        </div>

      </div>
    </div>
  );
};

export default WidgetPage;