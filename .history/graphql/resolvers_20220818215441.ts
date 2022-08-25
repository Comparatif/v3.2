import { prisma } from "../prisma/db"

export const resolvers = {
    Query:{
        links: () => await prisma.post.findMany,
    },
};