

import { client } from "@/lib/hono"
import { useQuery } from "@tanstack/react-query";

export  const useGetAccounts = () => {
    const Query =  useQuery({
        queryKey: ["accounts"],
        queryFn: async () => {
            console.log("client.api: ",client.api.accounts.$get);
            const response = await client.api.accounts.$get();
            console.log(response);

            if(!response.ok) {
                throw new Error("Failed to fetch accounts");
            }

            const { data }  = await response.json();
            return data;
        },
    });

    return Query;
}