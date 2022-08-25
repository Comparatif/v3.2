import { objectType } from 'Nexus'
//import { User } from './User'

export const Auth = objectType({
    name: 'Auth',
    definition(t) {
        t.string('id');
        t.string('id');
        t.string('id');
        t.boolean('showShop');
        t.boolean('enableOrder');
        t.boolean('enableRightClick');
    }
})
