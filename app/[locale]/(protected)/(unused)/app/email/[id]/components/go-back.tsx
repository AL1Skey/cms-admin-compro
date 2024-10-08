'use client'
import {
    MoveLeft,

} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from '@/components/navigation';
const GoBack = () => {
    const router = useRouter()
    return (
        <Button
            onClick={router.back}
            size="icon"
            className="rounded-full bg-default-100 hover:text-default-50 hover:outline-0 hover:outline-offset-0  hover:border-0 hover:ring-0 text-default-600 hover:ring-offset-0 p-4"
        >
            <MoveLeft className=" h-5 w-5" />
        </Button>
    )
}

export default GoBack