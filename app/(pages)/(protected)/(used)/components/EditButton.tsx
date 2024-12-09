"use client";
import React, { useState } from 'react'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { SquarePen } from 'lucide-react';

type AddButtonProps = Partial<{
    [key: string]: any;
}>
const EditButton = ({href}:AddButtonProps) => {
    const [pending,setPending] = useState(false);
    function changePending(e: any) {
      console.log('PENDING RUNNING')
      e.preventDefault();
      setPending(!pending);
      if (typeof window !== "undefined") {
        const height = window.innerHeight;
        console.log("Height: ", height);
        window.location.href = href;
      }
    }
  return (
    <>
    {!pending ? <Button onClick={changePending}>
        <SquarePen/> Edit
        </Button> : <Button disabled={true}> Pending </Button>}
    </>
  )
}

export default EditButton