import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useTranslations } from "next-intl";
interface item {
  version: string;
  date: string;
  changes: { name: string; tag?: string }[];
}
const ChangeLogPage = () => {
  const t = useTranslations("Changelog")
  const items: item[] = [
    {
      version: "Version 2.0.1",
      date: "1 February 2023",
      changes: [
        {
          name: "Monochrome mode",
          tag: "added",
        },
        {
          name: "Axios configuration",
          tag: "fixed",
        },
        {
          name: "Other minor issues",
          tag: "fixed",
        }
      ]
    },
    {
      version: "Version 2.0.0",
      date: "24 January 2023",
      changes: [
        {
          name: "Change log page added.",
          tag: "added",
        },
        {
          name: "Badge added in sidebar.",
          tag: "added",
        },
        {
          name: "Vuex replaced with pinia",
          tag: "update",
        },
        {
          name: "Webpack replaced with Vite.",
          tag: "update",
        },
        {
          name: "Other minor issues",
          tag: "fixed",
        }
      ]
    },
    {
      version: "Version 1.0.1 ",
      date: "3 January 2023",
      changes: [
        {
          name: "RTL version added.",
          tag: "added",
        },
        {
          name: "Sidebar updated.",
          tag: "update",
        },
        {
          name: "Other minor issues",
          tag: "fixed",
        }
      ]
    },
    {
      version: "Version 1.0.0 ",
      date: "29 December 2022",
      changes: [
        {
          name: "Initial Release",
        }
      ]
    }
  ];
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="lg:col-span-8 col-span-12">
        <Card>
          <CardHeader>
            <CardTitle>{t("version")}</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge color="primary" className="dark:text-white">New</Badge>
            <div className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                {
                  items.map((item, index) => (
                    <AccordionItem
                      value={`value-${index + 1}`}
                      key={`changelog-${index}`}
                      className="border-default-100"
                    >
                      <AccordionTrigger>
                        <div>
                          {item.version}
                          <span className="font-semibold text-xs text-default-400">
                            - Published on {item.date}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        {item.changes.map((data, j) => (
                          <div key={j}>
                            <div className="flex gap-3 items-center mt-2 text-default-600 text-sm">
                              <span className="h-2 w-2 bg-primary rounded-full"></span>
                              <span>{data.name}</span>
                              <span
                                className={` px-2 rounded-full text-xs capitalize
                                    ${data.tag === "added"
                                    ? "bg-primary/10 text-primary"
                                    : data.tag === "update"
                                      ? "bg-yellow-100 text-yellow-500"
                                      : data.tag === "fixed"
                                        ? "bg-destructive/10 text-destructive"
                                        : ""
                                  }
                                    `}
                              >
                                {data.tag}
                              </span>
                            </div>
                          </div>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  ))
                }
              </Accordion>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="lg:col-span-4 col-span-12">
        <Card>
          <CardHeader>
            <CardTitle>
              {t("changelog")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h5 className="text-xs font-medium">
              {t("versionHistory")}
            </h5>
            <ul className="space-y-3 mt-6 divide-y  divide-default-100 dark:divide-default-300">
              {items.map((item, i) => (
                <li
                  className="flex justify-between items-center text-xs text-default-600  pt-3"
                  key={i}
                >
                  <span>{item.version} </span>
                  <span>{item.date}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ChangeLogPage;