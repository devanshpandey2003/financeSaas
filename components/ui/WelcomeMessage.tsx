"use client"

import { useUser } from "@clerk/nextjs"

export const WelcomeMessgae = () => {
    const { user } = useUser();

    return (
        <div className="space-y-2 mb-4">
            <h2 className="text-2xl lg:text-4xl text-white font-medium ">
                Welcome Back 👋🏻
            </h2>
            <p className="text-sm lg:text-base text-[#89b6fd]">
                this is your financial dvisor
            </p>
        </div>
    )
}  