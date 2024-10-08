interface ColumnsProps {
  label: string
  field: string
}
interface TableDataProps {
  id: number
  age: number
  first_name: string
  last_name: string
  email: string
  gender: string
  phone: string
  occuption: string
  img: string
}

export const columns: ColumnsProps[] = [
  {
    label: "Age",
    field: "age",
  },
  {
    label: "First Name",
    field: "first_name",
  },

  {
    label: "Email",
    field: "email",
  }
];

export const tableData: TableDataProps[] = [{
  id: 1,
  age: 82,
  first_name: "Dorelle",
  last_name: "Harling",
  email: "dharling0@rediff.com",
  gender: "Female",
  phone: "232(152)707-0110",
  occuption: "Financial Advisor",
  img: "/images/users/user-1.jpg"
},
{
  id: 2,
  age: 89,
  first_name: "Bendicty",
  last_name: "Llewellin",
  email: "bllewellin1@example.com",
  gender: "Male",
  phone: "420(169)218-1769",
  occuption: "Marketing Assistant",
  img: "/images/users/user-2.jpg"
},
{
  id: 3,
  age: 28,
  first_name: "Remy",
  last_name: "Carbry",
  email: "rcarbry2@prlog.org",
  gender: "Polygender",
  phone: "86(958)204-4491",
  occuption: "Mechanical Systems Engineer",
  img: "/images/users/user-3.jpg"
},
{
  id: 4,
  age: 20,
  first_name: "Bernardo",
  last_name: "Hacun",
  email: "bhacun3@xinhuanet.com",
  gender: "Male",
  phone: "86(974)709-5254",
  occuption: "Research Assistant IV",
  img: "/images/users/user-4.jpg"
},
{
  id: 5,
  age: 2,
  first_name: "Emelia",
  last_name: "Garstang",
  email: "egarstang4@miitbeian.gov.cn",
  gender: "Female",
  phone: "55(644)175-6748",
  occuption: "Business Systems Development Analyst",
  img: "/images/users/user-5.jpg"
},
{
  id: 6,
  age: 98,
  first_name: "Dian",
  last_name: "Dopson",
  email: "ddopson5@examiner.com",
  gender: "Female",
  phone: "51(186)560-8480",
  occuption: "Cost Accountant",
  img: "/images/users/user-6.jpg"
},
{
  id: 7,
  age: 17,
  first_name: "Coretta",
  last_name: "Ponter",
  email: "cponter6@loc.gov",
  gender: "Female",
  phone: "1(941)734-6255",
  occuption: "Budget/Accounting Analyst II",
  img: "/images/users/user-1.jpg"
}]