import { scalarType, extendType, objectType, asNexusMethod, intArg, stringArg, booleanArg, nonNull, arg } from 'nexus'
import { GraphQLDate } from 'graphql-iso-date'
import { GraphQLDateTime } from 'graphql-scalars'
import { link } from 'fs'

//import { User } from './User'
export const DateTime = asNexusMethod(GraphQLDateTime, 'date')

export const Order = objectType({
    name: 'Order',
    definition(t) {
        t.string('id');
        t.string('orderId');
        t.field('createdAt', { type: 'DateTime' })
        t.field('updatedAt', { type: 'DateTime' })
        t.boolean('pending');
        t.boolean('accepted');
        t.string('acceptedBy');
        t.string('acceptedAt');
        t.boolean('sold');
        t.string('soldBy');
        t.string('soldAt');
        t.boolean('canceled');
        t.string('canceledBy');
        t.string('canceledAt');
        t.string('canceledWhy');
        t.string('userEmail');
        t.field('emailVerified', { type: 'DateTime' })
        t.string('firstName');
        t.string('lastName');
        t.string('phoneNumber');
        t.string('countryName');
        t.string('city');
        t.string('user_commune');
        t.string('vendeurs');
        t.string('villes1');
        t.string('adresses');
        t.string('telephone1');
        t.string('telephone2');
        t.string('fix1');
        t.string('shopEmail');
        t.string('facebook');
        t.string('instagram');
        t.string('horaires');
        t.string('localisation');
        t.string('shop_website');
        t.string('shop_commune');
        t.string('livraison');
        t.string('paiement');
        t.string('vendeurs_image');
        t.string('product_names');
        t.string('product_imagelinks');
        t.string('marques');
        t.string('categories');
        t.string('product_links');
        t.int('product_price');
        t.string('stocks');
        t.string('product_country');
        t.string('product_commune');
        t.string('type');
    }
})

export const Edge = objectType({
    name: 'Edge',
    definition(t) {
        t.string('cursor');
        t.field('node', {
            type: Order,
        });
    },
});

export const PageInfo = objectType({
    name: 'PageInfo',
    definition(t) {
        t.string('startCursor');
        t.string('endCursor');
        t.boolean('hasPrevPage');
        t.boolean('hasNextPage');
    },
});

export const Response = objectType({
    name: 'Response',
    definition(t) {
        t.field('pageInfo', { type: PageInfo});
        t.list.field('edges', {
            type: Edge,
        });
    },
});



export const OrderQuery = extendType({
    type: 'Query',
    definition(t) {
        t.field('orders', {
            type: 'Response',
            args: {
                after: stringArg(),
                before: stringArg(),
                first: intArg(),
                last: intArg(),
                acceptedBy: stringArg(),
                pending: booleanArg(),
                

                
            },
             async resolve(_, args, ctx) {
                let queryResults = null;
                let where = null
                if (args)

                if (args.after) {
                    // check if there is a cursor as the after argument
                    queryResults = await ctx.prisma.order.findMany({
                        where: {
                            OR: [
                            {pending: args.pending},
                            {acceptedBy: args.acceptedBy}
                            ]
                        },
                        orderBy: {
                            createdAt: 'desc',
                          },
                        take: args.first, //the number of items to return from the database
                        skip: 1, // skip the cursor
                        cursor: {
                            id: args.after, // the cursor
                        },
                    });
                    
                } else if (args.before) {
                    // check if there is a cursor as the before argument
                    queryResults = await ctx.prisma.order.findMany({
                        where: {
                            OR: [
                                {pending: args.pending},
                                {acceptedBy: args.acceptedBy}
                                ]
                        },
                        orderBy: {
                            createdAt: 'desc',
                          },
                        take: args.last * (-1), //the number of items to return from the database
                        skip: 1, // skip the cursor
                        cursor: {
                            id: args.before, // the cursor
                        },
                    });

                } else {
                    // if no cursor, this means that this is the first request
                    // and we will return the first items in the database
                    queryResults = await ctx.prisma.order.findMany({
                        where: {
                            OR: [
                                {pending: args.pending},
                                {acceptedBy: args.acceptedBy}
                                ]
                        },
                        orderBy: {
                            createdAt: 'desc',
                          },
                        take: args.first,
                    });
                } 

                



                // if the initial request returns links
                if (queryResults.length > 0) {
                    // get first element in previous result set
                    const firstOrderInResults = queryResults[0];
                    // get last element in previous result set
                    const lastOrderInResults = queryResults[queryResults.length - 1];
                    // start cursor we'll return in subsequent requests
                    const startCursor = firstOrderInResults.id;
                    // end cursor we'll return in subsequent requests
                    const endCursor = lastOrderInResults.id;
             
                    // query after the cursor to check if we have previousPage
                    const secondQueryResultsPrev = await ctx.prisma.order.findMany({
                        where: {
                            OR: [
                                {pending: args.pending},
                                {acceptedBy: args.acceptedBy}
                                ]
                        },
                        orderBy: {
                        createdAt: 'desc',
                            },
                        take: args.last * (-1),
                        cursor: {
                            id: startCursor,
                        },
                    });

                    // query after the cursor to check if we have nextPage
                    const secondQueryResultsNext = await ctx.prisma.order.findMany({
                        where: {
                            OR: [
                                {pending: args.pending},
                                {acceptedBy: args.acceptedBy}
                                ]
                        },
                        orderBy: {
                            createdAt: 'desc',
                          },
                        take: args.first,
                        cursor: {
                            id: endCursor,
                        },
                    });

                    //return response
                    const result = {
                        pageInfo: {
                            startCursor: startCursor,
                            endCursor: endCursor,
                            hasPrevPage: secondQueryResultsPrev.length >= args.last, // if the number of items requested is greater than the response of the second query, we have another page
                            hasNextPage: secondQueryResultsNext.length >= args.first, // if the number of items requested is greater than the response of the second query, we have another page
                            

                        },
                        edges: queryResults.map((order) => ({
                            cursor: order.id,
                            node: order,
                        })),
                    };

                    return result;
                }
                //
                return {
                   
                    pageInfo: {
                        startCursor: null,
                        endCursor: null,
                        hasPrevPage: false,
                        hasNextPage: false,
                    },
                    edges: [],
                };
            },
        });
    },
});


// update Order
export const UpdateOrderMutation = extendType({
    type: 'Mutation',
    definition(t) {
      t.nonNull.field('updateOrder', {
        type: 'Order',
        args: {
            id: stringArg(),
            pending: booleanArg(),
            accepted: booleanArg(),
            acceptedBy: stringArg(),
            acceptedAt: stringArg(),   
            sold: booleanArg(),
            soldBy: stringArg(),   
            soldAt: stringArg(),   
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
  // // delete Order
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



  




/*
export const OrderQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.field('orders', {
            type: 'Order',
            resolve(_parent, _args, ctx) {
                return ctx.prisma.order.findMany();
            },
        });
    },
});
*/