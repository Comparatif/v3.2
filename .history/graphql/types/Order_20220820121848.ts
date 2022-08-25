import { scalarType, extendType, objectType, asNexusMethod, intArg, stringArg } from 'Nexus'
import { GraphQLDate } from 'graphql-iso-date'
import { GraphQLDateTime } from 'graphql-scalars'

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
        t.string('endCursor');
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
                first: intArg(),
                after: stringArg(),
            },
             async resolve(_, args, ctx) {
                let queryResults = null;

                if (args.after) {
                    // check if there is a cursor as the argument
                    queryResults = await ctx.prisma.order.findMany({
                        take: args.first, //the number of items to return from the database
                        skip: 1, // skip the cursor
                        cursor: {
                            id: args.after, // the cursor
                        },
                    });
                } else {
                    // if no cursor, this means that this is the first request
                    // and we will return the first items in the database
                    queryResults = await ctx.prisma.order.findMany({
                        take: args.first,
                    });
                }
                // if the initial request returns links
                if (queryResults.length > 0) {
                    // get last element in previous result set
                    const lastOrderInResults = queryResults[queryResults.length - 1];
                    // cursor we'll return in subsequent requests
                    const myCursor = lastOrderInResults.id;

                    // query after the cursor to check if we have nextPage
                    const secondQueryResults = await ctx.prisma.order.findMany({
                        take: args.first,
                        cursor: {
                            id: myCursor,
                        },
                    });
                    //return response
                    const result = {
                        pageInfo: {
                            endCursor: myCursor,
                            hasNextPage: secondQueryResults.length >= args.first, // if the number of items requested is greater than the response of the second query, we have another page

                        },
                        edges: queryResults.map(())
                    }
                }
                return {
                    edges: [
                        {
                            cursor: '',
                            node: {
                                id: '',
                                orderId: '',  
                                firstName: '',
                            },
                        },
                    ],
                    pageInfo: {
                        endCursor: '',
                        hasNextPage: false,
                    }
                }
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