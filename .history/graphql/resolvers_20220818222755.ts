export const resolvers = {
    Query:{
        orders: async (_parent, _args, context) => await context.prisma.order.findMany(),
    },
};