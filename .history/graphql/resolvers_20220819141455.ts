
export const resolvers = {
    Query:{
        orders: async (_parent, _args, ctx) => await ctx.prisma.order.findMany(),
    },
};



export const DateTime = asNexusMethod(GraphQLDateTime, 'date')