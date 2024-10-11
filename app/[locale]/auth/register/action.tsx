import { parseJSON } from "date-fns";

interface RegisterData {
    email: string;
    password: string;
    name: string;
    role: any;
}
export const registerAct = async (data: RegisterData) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/register`;
    data.role = parseJSON(data.role);
    const response = await fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    console.log(response);
    return response;
  } catch (error) {
    throw new Error(error as string);
  }
}