import { prisma } from "../prisma/db"

export const resolvers = {
    Query:{
        orders: async (_parent, args) => await prisma.order.findMany(),
    },
};