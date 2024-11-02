"use client";


import { Button } from "@/components/ui/button";
import { use } from "react";
import { useNewAccount } from "@/features/accounts/hooks/use_new_account";
import { OpenAccountSheet } from "@/features/accounts/components/open_account";
import { SheetProvider } from "@/provider/sheetProvider/sheet_provider";
import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";



export default function Home() {
  const { data, error, isLoading } = useGetAccounts();
  const { onOpen } = useNewAccount(); 
  //console.log("isOpen" , isOpen);
  //const afterOpen = onOpen;
  //console.log("afterOpen", afterOpen);
  


  return (
  <div>
   


  












    <Button size="sm" onClick={ onOpen } >
    add a new account
   </Button>
    
  
  </div>
  )
}


