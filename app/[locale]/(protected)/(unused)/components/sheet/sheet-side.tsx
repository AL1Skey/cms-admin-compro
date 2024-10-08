"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

const SheetSide = () => {
  return (
    <div className="flex flex-wrap gap-6">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline" className="capitalize">Open {side}</Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you are done.
              </SheetDescription>
            </SheetHeader>
            <div className="space-y-4 py-4">
              <div className="flex items-center gap-4">
                <Label htmlFor="name" className="min-w-20"> Name</Label>
                <Input id="name" placeholder="Pedro Duarte" />
              </div>
              <div className="flex items-center gap-4">
                <Label htmlFor="username" className="min-w-20"> Username</Label>
                <Input id="username" placeholder="@peduarte" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}

export default SheetSide;