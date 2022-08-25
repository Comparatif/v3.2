import { prisma } from "../prisma/db"

export const resolvers = {
    Query:{
        postsd: async () => await prisma.post.findMany(),
    },
};