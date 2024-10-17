import { cookies } from 'next/headers'
import React from 'react'
import Profile from './Profile'

const page = async() => {
    const token = cookies().get('Authorization')?.value
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/self`, {
        method: 'GET',
        headers: {
            'Authorization': `${token}`
        }
    }).then(res => res.json())
  return (
    <div>
      <Profile data={data} />
    </div>
  )
}

export default page
