"use client";
import React, { useState } from 'react'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

type AddButtonProps = Partial<{
    [key: string]: any;
}>
const AddButton = ({href}:AddButtonProps) => {
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
    {!pending ? <Button onClick={changePending}>Add</Button> : <Button disabled={true}>Pending </Button>}
    </>
  )
}

export default AddButton