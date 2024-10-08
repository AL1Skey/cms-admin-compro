import { Link } from '@/i18n/routing';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import React from "react";

type Props = {};

const lists = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
];
const Typography = ({ }: Props) => {
  return (
    <div>
      {" "}
      <div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          <Card>
            <CardHeader className="border-b border-solid mb-6">
              <CardTitle>HTML headings Default</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-default-600 ">
                All HTML headings, are available. .h1 through .h7 classes are
                also available, for when you want to match the font styling of a
                heading.
              </div>
              <div className="bg-default-100  text-xs text-default-600  flex justify-between py-3 px-6 items-center -mx-6 mt-6 mb-6 font-semibold">
                <span>PREVIEW</span>
                <span>FONT SIZE</span>
              </div>

              <div className="text-[60px] md:flex justify-between items-center mb-4">
                <h1>Heading 1</h1>
                <span className="text-[60px] text-default-600 ">60px</span>
              </div>

              <div className="text-[48px] md:flex justify-between items-center mb-4">
                <h2>Heading 2</h2>
                <span className="text-default-600 ">48px</span>
              </div>

              <div className="text-[36px] md:flex justify-between items-center mb-4">
                <h3>Heading 3</h3>
                <span className=" text-default-600 ">36px</span>
              </div>
              <div className="text-[30px] md:flex justify-between items-center mb-4">
                <h4>Heading 4</h4>
                <span className=" text-default-600 ">30px</span>
              </div>
              <div className="text-[24px] md:flex justify-between items-center mb-4">
                <h5>Heading 5</h5>
                <span className=" text-default-600 ">24px</span>
              </div>
              <div className="text-[20px] md:flex justify-between items-center mb-4">
                <h6>Heading 6</h6>
                <span className=" text-default-600 ">20px</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="border-b border-solid mb-6">
              <CardTitle>HTML headings Light</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-default-600 ">
                All HTML headings are available with light and bold font-weight.
                Use .font-weight-normal for light heading and .
              </div>
              <div className="bg-default-100  text-xs text-default-600  flex justify-between py-3 px-6 items-center -mx-6 mt-6 mb-6 font-semibold">
                <span>LIGHT HEADINGS</span>
                <span>BOLD HEADINGS</span>
              </div>

              <div className="text-[60px] md:flex justify-between items-center mb-4">
                <h1 className="font-normal">Heading</h1>
                <h1 className="font-semibold">Heading</h1>
              </div>

              <div className="text-[48px] md:flex justify-between items-center mb-4">
                <h2 className="font-normal">Heading 2</h2>
                <h2 className="font-semibold">Heading 2</h2>
              </div>

              <div className="text-[36px] md:flex justify-between items-center mb-4">
                <h3 className="font-normal">Heading 3</h3>
                <h3 className="font-semibold">Heading 3</h3>
              </div>
              <div className="text-[30px] md:flex justify-between items-center mb-4">
                <h4 className="font-normal">Heading 4</h4>
                <h4 className="font-semibold">Heading 4</h4>
              </div>
              <div className="text-[24px] md:flex justify-between items-center mb-4">
                <h5 className="font-normal">Heading 5</h5>
                <h5 className="font-semibold">Heading 5</h5>
              </div>
              <div className="text-[20px] md:flex justify-between items-center mb-4">
                <h6 className="font-normal">Heading 6</h6>
                <h6 className="font-semibold">Heading 6</h6>
              </div>
            </CardContent>
          </Card>
          <div className="lg:col-span-2 col-span-1">
            <Card>
              <CardHeader className="border-b border-solid mb-6">
                <CardTitle>Texts</CardTitle>
              </CardHeader>
              <CardContent className="-mx-6">
                <table className="w-full border-collapse border-none text-left">
                  <thead>
                    <tr>
                      <th className="text-xs font-semibold bg-default-100 ">
                        <span className="px-6 py-5 block text-default-600 ">
                          Type
                        </span>
                      </th>
                      <th className="text-xs font-semibold bg-default-100 ">
                        <span className="px-6 py-5 block text-default-600 ">
                          Class
                        </span>
                      </th>
                      <th className="text-xs font-semibold bg-default-100 ">
                        <span className="px-6 py-5 block text-default-600 ">
                          Text
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-default-100 dark:border-default-700">
                      <td className="text-default-900  text-left px-6 py-4 text-lg font-medium">
                        Title
                      </td>
                      <td className="text-default-900  text-lg font-medium text-left t px-6 py-4">
                        text-lg
                      </td>
                      <td className="text-default-900  text-lg font-medium text-left px-6 py-4">
                        <div>
                          Cupcake ipsum dolor sit amet fruitcake donut
                          chocolate.
                        </div>
                        <div className="text-xs text-default-500 dark:text-default-400 mt-1">
                          font-size: 18px / line-height: 28px / font-weight: 500
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-default-100 dark:border-default-700">
                      <td className="text-default-700  text-left px-6 py-4 text-base font-normal">
                        Sub Title
                      </td>
                      <td className="text-default-700  text-base font-normaltext-left t px-6 py-4">
                        text-base
                      </td>
                      <td className="text-default-700  text-base font-normal text-left px-6 py-4">
                        <div>
                          Cupcake ipsum dolor sit amet fruitcake donut
                          chocolate.
                        </div>
                        <div className="text-xs text-default-500 dark:text-default-400 mt-1">
                          font-size: 16px / line-height: 24px / font-weight: 400
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-default-100 dark:border-default-700">
                      <td className="text-default-600  text-left px-6 py-4 text-sm font-normal">
                        Body Text
                      </td>
                      <td className="text-default-600  text-base font-sm font-normal text-left t px-6 py-4">
                        text-sm
                      </td>
                      <td className="text-default-600  text-sm font-normal text-left px-6 py-4">
                        <div>
                          Cupcake ipsum dolor sit amet fruitcake donut
                          chocolate.
                        </div>
                        <div className="text-xs text-default-500 dark:text-default-400 mt-1">
                          font-size: 14px / line-height: 20px / font-weight: 400
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-default-600  text-left px-6 py-4 text-xs font-normal">
                        Small Text
                      </td>
                      <td className="text-default-600  text-base font-xs font-normal text-left t px-6 py-4">
                        text-xs
                      </td>
                      <td className="text-default-600  text-xs font-normal text-left px-6 py-4">
                        <div>
                          Cupcake ipsum dolor sit amet fruitcake donut
                          chocolate.
                        </div>
                        <div className="text-xs text-default-500 dark:text-default-400 mt-1">
                          font-size: 12px / line-height: 18px / font-weight: 400
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader className="border-b border-solid mb-6">
              <CardTitle>Customizing headings Default</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-default-600  mb-6">
                Use the included utility classes to recreate the small
                secondary-500 heading text.
              </div>

              <div className="text-[60px] md:flex font-medium justify-between items-center mb-3">
                <h1>Display heading</h1>
              </div>
              <div className="text-[48px] md:flex font-medium justify-between items-center mb-3">
                <h2>Display heading</h2>
              </div>
              <div className="text-[36px] md:flex font-medium justify-between items-center mb-3">
                <h3>Display heading</h3>
              </div>
              <div className="text-[30px] md:flex font-medium justify-between items-center mb-3">
                <h4>Display heading</h4>
              </div>
              <div className="text-[24px] md:flex font-medium justify-between items-center mb-3">
                <h5>Display heading</h5>
              </div>
              <div className="text-[20px] md:flex font-medium justify-between items-center mb-3">
                <h6>Display heading</h6>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="border-b border-solid mb-6">
              <CardTitle>Heading colors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-default-600  mb-6">
                Use the included utility classes to recreate the small
                secondary-500 heading text.
              </div>

              <div className="text-[60px] md:flex font-medium justify-between items-center mb-3">
                <h1 className="text-default">Display heading</h1>
              </div>
              <div className="text-[48px] md:flex font-medium justify-between items-center mb-3">
                <h2 className="text-primary">Display heading</h2>
              </div>
              <div className="text-[36px] md:flex font-medium justify-between items-center mb-3">
                <h3 className="text-info">Display heading</h3>
              </div>
              <div className="text-[30px] md:flex font-medium justify-between items-center mb-3">
                <h4 className="text-success">Display heading</h4>
              </div>
              <div className="text-[24px] md:flex font-medium justify-between items-center mb-3">
                <h5 className="text-warning">Display heading</h5>
              </div>
              <div className="text-[20px] md:flex font-medium justify-between items-center mb-3">
                <h6 className="text-destructive">Display heading</h6>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="border-b border-solid mb-6">
              <CardTitle>Display Headings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-default-600  mb-6">
                Traditional heading elements are designed to work best in the
                meat of your page content. When you need a heading to stand out,
                consider using a display heading—a larger, slightly more
                opinionated heading style.
              </div>

              <div className="text-[60px] md:flex font-medium justify-between items-center mb-3">
                <h1>Display 1</h1>
              </div>
              <div className="text-[48px] md:flex font-medium justify-between items-center mb-3">
                <h2>Display 2</h2>
              </div>
              <div className="text-[36px] md:flex font-medium justify-between items-center mb-3">
                <h3>Display 3</h3>
              </div>
              <div className="text-[30px] md:flex font-medium justify-between items-center mb-3">
                <h4>Display 4</h4>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-5">
            <Card>
              <CardHeader className="border-b border-solid mb-6">
                <CardTitle>Inline Text Elements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm font-light text-default-600 ">
                    Styling for common inline HTML5 elements.
                  </p>
                  <p className="text-sm font-light text-default-900 ">
                    <del>
                      This line of text is meant to be treated as deleted text.
                    </del>
                  </p>
                  <p className="text-sm font-light text-default-900 ">
                    <Link href="#" className="underline">
                      This line of text is meant to be treated as an addition to
                      the document.
                    </Link>
                  </p>
                  <p className="text-sm font-light text-default-900 ">
                    <del>
                      This line of text is meant to be treated as deleted text.
                    </del>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-2 col-span-1">
            <Card>
              <CardHeader className="border-b border-solid mb-6">
                <CardTitle>Text Color</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm font-light text-default ">
                  Styling for common inline HTML5 elements.
                </p>
                <p className="text-sm font-light text-primary">
                  Styling for common inline HTML5 elements.
                </p>
                <p className="text-sm font-light text-success">
                  Styling for common inline HTML5 elements.
                </p>
                <p className="text-sm font-light text-warning">
                  This is warning text You can archive this adding
                  .text-warning class
                </p>
                <p className="text-sm font-light text-destructive">
                  This is danger text You can archive this adding
                  .text-danger class
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 col-span-1">
            <Card>
              <CardHeader className="border-b border-solid mb-6">
                <CardTitle>Listing Typography</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                  <div>
                    <span className="block text-default-900  font-medium leading-8 text-base mb-6">
                      Unorder list.
                    </span>
                    <ul className="space-y-3 p-6 rounded-md bg-default-50 ">
                      {lists.map((item, i) => (
                        <li key={i} className="text-sm text-default-900 ">
                          Lorem ipsum dolor sit amet.
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="block text-default-900  font-medium leading-8 text-base mb-6">
                      list-decimal
                    </span>
                    <ol className="space-y-3 p-6 rounded-md bg-default-50  lits-by-numbaring custom-list">
                      <li className="text-sm text-default-900 ">
                        <span> Lorem ipsum dolor sit amet.</span>
                        <ol className="lits-by-numbaring">
                          <li>Lorem ipsum dolor sit amet.</li>
                        </ol>
                      </li>
                      <li className="text-sm text-default-900 ">
                        <span> Lorem ipsum dolor sit amet.</span>
                      </li>
                      <li className="text-sm text-default-900 ">
                        <span> Lorem ipsum dolor sit amet.</span>
                      </li>
                      <li className="text-sm text-default-900 ">
                        <span> Lorem ipsum dolor sit amet.</span>
                      </li>
                      <li className="text-sm text-default-900 ">
                        <span> Lorem ipsum dolor sit amet.</span>
                      </li>
                    </ol>
                  </div>

                  <div>
                    <span className="block text-default-900  font-medium leading-8 text-base mb-6">
                      Dash list
                    </span>
                    <ul className="space-y-3 p-6 rounded-md bg-default-50  custom-list">
                      <li className="text-sm text-default-900 ">
                        <span className="font-medium">
                          {" "}
                          Lorem ipsum dolor sit amet.
                        </span>
                        <ul className="lits-by-slash">
                          <li>Lorem ipsum dolor sit amet.</li>
                        </ul>
                      </li>
                      <li className="text-sm text-default-900 ">
                        <span className="font-medium">
                          {" "}
                          Lorem ipsum dolor sit amet.
                        </span>
                        <ul className="lits-by-slash">
                          <li>Lorem ipsum dolor sit amet.</li>
                        </ul>
                      </li>
                      <li className="text-sm text-default-900 ">
                        <span className="font-medium">
                          {" "}
                          Lorem ipsum dolor sit amet.
                        </span>
                        <ul className="lits-by-slash">
                          <li>Lorem ipsum dolor sit amet.</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <span className="block text-default-900  font-medium leading-8 text-base mb-6">
                      Icon List 1
                    </span>
                    <ul className="space-y-3 p-6 rounded-md bg-default-50 ">
                      {lists.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-default-900  flex space-x-2 items-center rtl:space-x-reverse"
                        >
                          <span>
                            <Icon icon="heroicons:chevron-double-right" />
                          </span>
                          <span>Lorem ipsum dolor sit amet.</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="block text-default-900  font-medium leading-8 text-base mb-6">
                      Icon List 2
                    </span>
                    <ul className="space-y-3 p-6 rounded-md bg-default-50 ">
                      {lists.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-default-900  flex space-x-2 items-center rtl:space-x-reverse"
                        >
                          <span>
                            <Icon icon="heroicons:chevron-right" />
                          </span>
                          <span>Lorem ipsum dolor sit amet.</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="block text-default-900  font-medium leading-8 text-base mb-6">
                      Icon List 3
                    </span>
                    <ul className="space-y-3 p-6 rounded-md bg-default-50 ">
                      {lists.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-default-900  flex space-x-2 items-center rtl:space-x-reverse"
                        >
                          <span className="h-[6px] w-[6px] bg-default-900 rounded-full inline-block"></span>
                          <span>Lorem ipsum dolor sit amet.</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="border-b border-solid mb-6">
                <CardTitle>Blockquotes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <blockquote className=" italic text-xl text-default-900 ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus laudantium omnis fugit ducimus nulla libero
                  temporibus corrupti non voluptatem harum?
                  <span className="text-sm text-default-400 block mt-3">
                    Dashcode Admin Template
                  </span>
                </blockquote>
                <blockquote className=" italic text-xl border-primary-500 text-right text-default-900 ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus laudantium omnis fugit ducimus nulla libero
                  temporibus corrupti non voluptatem harum?
                  <span className="text-sm text-default-400 block mt-3">
                    Dashcode Admin Template
                  </span>
                </blockquote>
                <blockquote className=" italic text-xl border-success-500 text-center text-default-900 ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus laudantium omnis fugit ducimus nulla libero
                  temporibus corrupti non voluptatem harum?
                  <span className="text-sm text-default-400 block mt-3">
                    Dashcode Admin Template
                  </span>
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Typography;
