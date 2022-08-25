export const resolvers = {
    Query:{
        orders: async (_parent, _args, ctx) => await context.prisma.order.findMany(),
    },
};