"use server"
import { cookies } from "next/headers";
function token() {
    const token = cookies().get('Authorization')?.value;
    return token;
}

export const add = async(data:FormData)=>{
    console.log(`${process.env.NEXT_PUBLIC_API_URL}/alumni`);
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/alumni`,{
        method: 'POST',
        headers: {
            'Authorization': `${token()}`
        },
        body: data
    }).then((response)=>{
        console.log(response);
        return response.json();
    })
    .catch((error)=>{
        console.log(error);
    }
    );
    console.log(response);
    return response;
}

export const update = async(data:FormData)=>{
    const id = data.get('id');
    console.log(data,"ASDASDPPPPPPPPPPPPPPPPPPPPPPPPP");
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/alumni/${id}`,{
        method: 'PUT',
        headers: {
            'Authorization': `${token()}`
        },
        body: data
    }).then((response)=>{
        console.log(response);
        return response.json();
    }
    );
    console.log(response);
    return response;
}

export const deleteAct = async(id:string)=>{
    console.log(id);
    console.log(`${process.env.NEXT_PUBLIC_API_URL}/alumni/${id}    DELETE`);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/alumni/${id}`,{
        method: 'DELETE',
        headers: {
            'Authorization': `${token()}`
        },
    }).then((res)=>{
        console.log(res);
        return res.json();
    }
    );
    console.log(response);
    // return response;
}