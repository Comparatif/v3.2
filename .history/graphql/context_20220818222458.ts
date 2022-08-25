import { PrismaClient } from '.prisma/client'
import { prisma } from '../prisma/db'

export type Context = {
    prisma: PrismaClient;
};

export async function createContext(req, res): Promise<Context>