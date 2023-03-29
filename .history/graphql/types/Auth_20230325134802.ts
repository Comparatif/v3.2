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
        t.string('shop');
    }
})
