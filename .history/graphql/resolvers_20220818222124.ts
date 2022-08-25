import { prisma } from "../prisma/db"

export const resolvers = {
    Query:{
        orders: async (_) => await prisma.order.findMany(),
    },
};