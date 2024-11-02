"use client";
import { useState } from "react";
import { z } from "zod";
import { Trash } from "lucide-react";
import { useCreateAccount } from "../api/use-create-account";
import { useNewAccount } from "../hooks/use_new_account";
import { createId } from '@paralleldrive/cuid2';
import { AccountInput, accountSchema } from "@/zodValidator/zod";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import accountRoute from "@/app/api/[[...route]]/accounts";



export function AccountForm() {
    const [accountId, setAccountId] = useState<string | null>(null);
    const [name, setName] = useState("");
    const [disabled, setDisabled] = useState(false);

    const mutation = useCreateAccount();
    const { onClose } = useNewAccount();

    const id = createId();


    const handleDelete = () => {
        //setAccountId(null);
            console.log("handleDelete got called")
    }

    const handleId =() => {
        setAccountId(id);
        console.log("accountId from handleId", accountId);
        onSubmit({name, id});
    }

   
        const onSubmit = (values: AccountInput) => {
            mutation.mutate(values),
                console.log("values in onSubmit", values), {
                onSuccess: () => {
                    onClose();
                }
            }

        }
    

    return (
        <div className="grid w-full max-w-sm items-center gap-4 py-8">

            <Label htmlFor="Name">Name</Label>
            <Input onChange={(e) => {
                setName(e.target.value);
            }}
                type="text" id="id" placeholder="e.g. Cash, Credit Card, Bank" />
            <Button
                className="w-full space-y-4"
                disabled={disabled}
                onClick={handleId}
            >
                {accountId ? "Save Changes" : "Create Account"}
            </Button>
            <Button
                type="button"
                disabled={disabled}
                onClick={handleDelete}
                className="w-full"
                variant="outline"
            >
                <Trash />
                Delete Account
            </Button>
        </div>
    )
}

