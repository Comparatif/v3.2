import { objectType } from 'Nexus'
import { User } from './User'

export const Order = objectType({
    definition(t) {
        t.string('id');
    }
})