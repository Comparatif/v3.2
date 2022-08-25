import { prisma } from "../prisma/db"

export const resolvers = {
    Query:{
        posts: async () => await prisma.post.findMany(),
    },
};