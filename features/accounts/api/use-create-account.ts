import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AccountInput, accountSchema } from "@/zodValidator/zod"
import { client } from "@/lib/hono";
import { toast } from "sonner";

 export const useCreateAccount = () => {
    const queryClient = useQueryClient();
   
    const mutation = useMutation({
        
        mutationFn: async (json: AccountInput) => {
            
            const response  = await client.api.accounts.$post({ json});
            
            return await  response.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["account"] })
            toast.success("Account Created");
           
        },
        onError: (error: unknown) => {
            toast.error("Error creating account");
            
            if (error instanceof Error) {
                console.error("Mutation Error:", error.message);
            } else {
                console.error("Mutation Error:", error);
            }
        } ,
    });
  
    return mutation;
 };

