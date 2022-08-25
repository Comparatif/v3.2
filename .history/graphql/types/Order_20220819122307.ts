import { objectType } from 'Nexus'
//import { User } from './User'

export const Order = objectType({
    name: 'Order',
    definition(t) {
        t.string('id');
        t.string('orderId');
        t.string('createdAt');
        t.string('updatedAt');
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
        t.string('emailVerified');
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


export const OrderQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.field('order', {
            type;
        })
    }
})
