import { objectType } from 'Nexus'
import { User } from './User'

export const Order = objectType({
    definition(t) {
        t.string('id');
        t.string('orderId')
        t.string('createdAt')
        t.string('updatedAt')
        t.boolean('pending')
        t.boolean('accepted')
        t.string('acceptedBy')
        t.string('acceptedAt')
        t.boolean('sold')
        t.string('')
        t.string('')
        t.boolean('')
        t.string('')
        t.string('')
        t.string('')
        t.string('')
        t.string('')
        t.string('')
        t.string('')
    }
})

t.boolean('')
t.string('')