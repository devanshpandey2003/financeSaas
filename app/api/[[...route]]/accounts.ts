import { Hono } from 'hono';
import { accountSchema } from '@/zodValidator/zod'
import { zValidator } from '@hono/zod-validator';
import { clerkMiddleware, getAuth } from '@hono/clerk-auth';


import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'




const prisma = new PrismaClient().$extends(withAccelerate())



const accountRoute = new Hono()
    .get('/', clerkMiddleware(), async (c) => {

        const auth = getAuth(c);

        if (!auth?.userId) {
            return c.json({ error: "unauthorized" }, 401);
        }

        const account = await prisma.account.findMany(
            {
                select: {

                    name: true,

                }
            }
        );

        return c.json({
            data: account
        });

    })
    .post('/', clerkMiddleware(),
        zValidator('json', accountSchema),
        async (c) => {
            const auth = getAuth(c);
            const values = c.req.valid("json");

            if (!auth?.userId) {
                return c.json({ error: "unauthorized" }, 401);
            }

            const account = prisma.account.create({
                data: {
                    id: values.id,
                    name: values.name,
                    user_id: auth.userId,
                }
            });
            return c.json({
                data: account
            });



        });



export default accountRoute;
