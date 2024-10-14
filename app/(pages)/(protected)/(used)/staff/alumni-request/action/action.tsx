"use server"
import { cookies } from "next/headers";
function token() {
    const token = cookies().get('Authorization')?.value;
    return token;
}

export const acceptRequest = async(id:string|null)=>{
    if(id === null){
        return;
    }
    console.log(id,"ASDASDPPPPPPPPPPPPPPPPPPPPPPPPP");
    const data = {
        approval: true
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/alumni/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token()}`
        },
        body: JSON.stringify(data)
    }).then((response)=>{
        console.log(response);
        return response.json();
    }
    );
    console.log(response);
    return response;
}

export const rejectRequest = async(id:string|null)=>{
    if(id === null){
        return;
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/alumni/${id}`,{
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