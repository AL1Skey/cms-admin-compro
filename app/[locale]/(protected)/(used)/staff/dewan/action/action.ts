"use server"
import { cookies } from "next/headers";
function token() {
    const token = cookies().get('Authorization')?.value;
    return token;
}

export const add = async(data:FormData)=>{
    console.log(`${process.env.NEXT_PUBLIC_API_URL}/dewan`);
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dewan`,{
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
    const req:{[key:string]:any} = {}
    data.forEach((value,key)=>{
        req[key] = value;
    });
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dewan/${id}`,{
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
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dewan/${id}`,{
        method: 'DELETE',
        headers: {
            'Authorization': `${token()}`
        },
    }).then((response)=>{
        console.log(response);
        return response.json();
    }
    );
    console.log(response);
    // return response;
}