"use client"

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import { useMedia } from "react-use";
import { Menu } from "lucide-react";

import { NavButton } from "@/components/ui/NavButton";
import { SheetContent, SheetTrigger, Sheet } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";





export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1024px)");
        setIsMobile(mediaQuery.matches);

        const handleResize = () => setIsMobile(mediaQuery.matches);

        mediaQuery.addListener(handleResize);

        return () => mediaQuery.removeListener(handleResize);
    }, []);


    const router = useRouter();
    const pathname = usePathname();

    const onClick = (route: string) => {

        router.push("route");
        setIsOpen(false);
    }

    const route = [
        {
            href: "/",
            label: "Overview"
        },
        {
            href: "/transaction",
            label: "Transaction"
        },
        {
            href: "/account",
            label: "Account"
        },
        {
            href: "/categories",
            label: "Categories"
        },
        {
            href: "/setting",
            label: "Setting"
        }
    ]

    if (isMobile) {
        return (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger>
                    <Button
                        size="sm"
                        variant="outline"
                        className="font-normal bg-white/30 hover:bg-white/40 hover:text-white border-none">
                        <Menu className="h-4 w-4" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="px-2" >
                    <nav className="flex flex-col gap-y-2 pt-6">
                        {route.map((r) => (
                            <Button
                                key={r.href}
                                className={`${r.href === pathname ? 'bg-blue-500 text-white' : ''}  bg-slate-500  w-full justify-start`}
                                onClick={() => onClick(r.href)}>
                                {r.label}
                            </Button>
                        ))}
                    </nav>
                </SheetContent>

            </Sheet>
        )
    }



    return (
        <div className="hidden  lg:flex items-center gap-x-4 overflow-x-auto">
            {route.map((r) => (
                <NavButton
                    key={r.href}
                    href={r.href}
                    label={r.label}
                    isActive={pathname === r.href} />
            ))}
        </div>
    )
}
