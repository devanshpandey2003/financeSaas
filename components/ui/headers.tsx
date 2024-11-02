import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs"

import { Navigation } from "@/components/ui/Navigation"
import { HeaderLogo } from "@/components/ui/headerLogo"
import { Loader, Loader2 } from "lucide-react"
import { WelcomeMessgae } from "./WelcomeMessage"

export const Header = () => {
    return (
        <header className="bg-gradient-to-b from-slate-700 to-slate-500 lg:px-14 pb-36 py-8">
            <div className="max-w-screen-2xl mx-auto">
                <div className="w-full flex justify-between mb-14 items-center">
                    <div className="flex items-center lg:gap-x-16">
                        <HeaderLogo />
                        <Navigation />
                    </div>
                    <div>
                        <ClerkLoading>
                            <Loader2 className="animate-spin size-8 text-slate-200 " />
                        </ClerkLoading>
                        <ClerkLoaded >
                            <UserButton afterSignOutUrl="/" />
                        </ClerkLoaded>

                    </div>
                </div>
                <WelcomeMessgae />

            </div>


        </header>
    )
}
