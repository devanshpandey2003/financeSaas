import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'
import { clerkMiddleware, getAuth } from '@hono/clerk-auth'
import accountRoute  from "./accounts"

 export const runtime = 'edge'

const app = new Hono().basePath('/api')

 const route = app
   .route("/accounts", accountRoute);


export const GET = handle(app)
export const POST = handle(app)

export type AppType = typeof route;