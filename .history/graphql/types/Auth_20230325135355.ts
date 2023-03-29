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

            id: intArg(),
            email: stringArg(),
            shop: stringArg(),
            test: booleanArg(),
            col: intArg(),   
            row: intArg(),
            dashboard: booleanArg(),   
            test123: stringArg()   
            
        },
        resolve(_parent, args, ctx) {
          return ctx.prisma.auth.update({
            where: { 
                id: args.id,
            },
            data: {
                id: args.id,
                email: args.email,
                shop: args.shop,
                test: args.test,   
                col: args.col,
                row: args.row,   
                dashboard: args.dashboard,   
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