import { prisma } from "../prisma/db"

export const resolvers = {
    Query:{
        orders: async () => await prisma.order.findMany(),
    },
};