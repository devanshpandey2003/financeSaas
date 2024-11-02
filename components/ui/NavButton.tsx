import  Link  from "next/link"
import { Button } from "./button"
import { cn } from "@/lib/utils"

interface Props {
    href: string,
    label: string,
    isActive?: boolean
}

export const NavButton = ({href, label, isActive} : Props) => {
        return (
            <Button 
            asChild
            size='sm'

            className={cn(
                "w-full lg:w-auto font-normal hover:bg-white/30 hover:text-white border-none transation",
            isActive? "bg-white/10 text-white" : "transparent" 
           
        )}
            
            >
                <Link href={href}>
                {label}
                </Link> 
            </Button>
        )


}