import { prisma } from "../prisma/db"

export const resolvers = {
    Query:{
        links: async () => await prisma.post.findMany(),
    },
};