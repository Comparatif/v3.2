export const resolvers = {
    Query:{
        orders: async (_parent, args, context) => await context.prisma.order.findMany(),
    },
};