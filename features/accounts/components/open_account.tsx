"use client"

import { useNewAccount } from "@/features/accounts/hooks/use_new_account"
import { 
Sheet,
 SheetContent,
 SheetHeader,
 SheetDescription,
 SheetTitle

 } from "@/components/ui/sheet"

import { AccountInput, accountSchema } from "@/zodValidator/zod";
import { useCreateAccount } from "../api/use-create-account";
import { AccountForm } from "./account-form";



export const OpenAccountSheet  = () => {
    const { isOpen, onClose } = useNewAccount();
   

   
    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>New Account</SheetTitle>
                    <SheetDescription>
                        Create a new account to track your transaction
                    </SheetDescription>
                </SheetHeader>
                <AccountForm />
            </SheetContent>
        </Sheet>
    );
};
