import Router from '@koa/router'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export const router = new Router()

const users = []

router.get('/users',async ctx => {
    ctx.body = users
})

router.post('/Users',async ctx => {
    const user = {
   username: ctx.request.body.username
}

users.push(user)

ctx.body = user
})