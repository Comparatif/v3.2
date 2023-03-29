import { objectType } from 'nexus'
//import { User } from './User'

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


export const DeleteOrderMutation = extendType({
    type: 'Mutation',
    definition(t) {
      t.nonNull.field('deleteOrder', {
        type: 'Order',
        args: {
          id: nonNull(stringArg()),
        },
        resolve(_parent, args, ctx) {
          return ctx.prisma.order.delete({
            where: { id: args.id },
          });
        },
      });
    },
  });