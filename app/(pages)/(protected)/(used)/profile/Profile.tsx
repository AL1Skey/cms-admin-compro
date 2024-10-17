"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

type ProfileProps = Partial<{
    data: { [key: string]: any }
    }>;
    

const Profile = ({data}:ProfileProps) => {
  return (
    <div>
      <Card>
        <CardHeader>
            <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent>
            {data && (
                <div>
                    <p><strong>Name:</strong> {data.name || 'N/A'}</p>
                    <p><strong>Email:</strong> {data.email || 'N/A'}</p>
                </div>
            )}
        </CardContent>
      </Card>
    </div>
  )
}

export default Profile
