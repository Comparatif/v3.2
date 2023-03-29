import { scalarType, extendType, objectType, asNexusMethod, intArg, stringArg, booleanArg, nonNull, arg } from 'nexus'
import { GraphQLDate } from 'graphql-iso-date'
import { GraphQLDateTime } from 'graphql-scalars'
import { link } from 'fs'

export const Auth = objectType({
    name: 'Auth',
    definition(t) {
        t.int('id');
        t.string('email');
        t.string('shop');
        t.boolean('test');
        t.int('col');
        t.int('row');
        t.boolean('dashboard');
        t.string('test123');
    }
})


// update Auth
export const UpdateAuthMutation = extendType({
    type: 'Mutation',
    definition(t) {
      t.nonNull.field('updateAuth', {
        type: 'Auth',
        args: {
            id: stringArg(),
            email: booleanArg(),
            shop: booleanArg(),
            test: stringArg(),
            col: stringArg(),   
            row: booleanArg(),
            dashboard: stringArg(),   
            test123: stringArg(),   
            canceled: booleanArg(),
            canceledBy: stringArg(),  
            canceledAt: stringArg(),  
            canceledWhy: stringArg()  
            
        },
        resolve(_parent, args, ctx) {
          return ctx.prisma.order.update({
            where: { 
                id: args.id,
            },
            data: {
                pending: args.pending,
                accepted: args.accepted,
                acceptedBy: args.acceptedBy,
                acceptedAt: args.acceptedAt,   
                sold: args.sold,
                soldBy: args.soldBy,   
                soldAt: args.soldAt,   
                canceled: args.canceled,
                canceledBy: args.canceledBy,  
                canceledAt: args.canceledAt,  
                canceledWhy: args.canceledWhy
            },
          });
        },
      });
    },
  });