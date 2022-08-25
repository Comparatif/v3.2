export const resolvers = {
    Query:{
        orders: async (_parent, _args, ctext) => await context.prisma.order.findMany(),
    },
};