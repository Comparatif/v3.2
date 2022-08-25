import { PrismaClient } from '.prisma/client'
import { prisma } from '../prisma/db'

export type Context = {
    prisma: PrismaClient;
}